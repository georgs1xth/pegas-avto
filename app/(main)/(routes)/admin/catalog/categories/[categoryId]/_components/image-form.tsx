"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { ImageIcon, Pencil, PlusCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";

interface ImageFormProps {
  initialData: Category;
  categoryId: string;
};

const formSchema = z.object({
  imageSrc: z.string().min(1, {
    message: "Image is required",
  }),
});

export const ImageForm = ({
  initialData,
  categoryId
}: ImageFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/category/${categoryId}`, values);
      toast.success("Категория обновлена");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так")
    }
  }

  return(
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Фото слайда 
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing && (
            <>Отмена</>
          )}
          {!isEditing && !initialData.imageSrc && (
            <>
              <PlusCircle className="h-4 w-4 mr-2"/>
              Добавить фото
            </>
          )}
          {!isEditing && initialData.imageSrc && (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить фото
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        !initialData.imageSrc ? (
          <div className="flex items-center justify-center h-60 bg-slate-200 rounded-md">
            <ImageIcon className="h-10 w-10 text-slate-500"/>
          </div>
        ) : (
          <div className="relative aspect-[16/12] mt-2">
            <Image 
              alt="Upload"
              fill
              className="object-cover rounded-md"
              src={initialData.imageSrc}
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
                onSubmit({ imageSrc: url });
              }
            }}
            />
            <div className="text-xs text-muted-foreground mt-4">
              16:12 aspect ratio recommended
            </div>
        </div>
      )}
    </div>
  )
}
