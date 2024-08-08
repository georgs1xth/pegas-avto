"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { MainCarouselItem } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
  initialData: MainCarouselItem;
  slideId: string;
};

const formSchema = z.object({
  imageUrl: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({
  initialData,
  slideId
}: ImageFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/main/slider-items/${slideId}`, values);
      toast.success("Course updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong")
    }
  }

  return(
    <div className="mt-6 border bg-accent/50 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Фото слайда 
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Отмена</>
          )}
          {!isEditing && !initialData.imageUrl && (
            <>
              <PlusCircle className="h-4 w-4 mr-2"/>
              Добавить фото
            </>
          )}
          {!isEditing && initialData.imageUrl && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить фото
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.imageUrl ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500"/>
          </div>
        ) : (
          <div className="relative aspect-video mt-2">
            <Image 
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={initialData.imageUrl}
            />
          </div>
        )
      )}
      {isEditing && (
        <div>
          <FileUpload 
            endpoint="Image"
            onChange={(url) => {
              if (url) {
                onSubmit({ imageUrl: url });
              }
            }}
            />
            <div className="text-xs text-muted-foreground mt-4">
              15:9 aspect ratio recommended
            </div>
        </div>
      )}
    </div>
  )
}
