"use client";

import * as z from "zod";
import axios from "axios";
import { useState } from "react";
import { File, Loader2, PlusCircle, X } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { CatalogItem, ImageSrcMultiple } from "@prisma/client";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { FileUpload } from "@/components/file-upload";
import { ImagesList } from "./images-list";
import { cn } from "@/lib/utils";

interface ImagesFormProps {
  initialData: CatalogItem & { imageSrcs: ImageSrcMultiple[] };
  catalogItemId: string;
};

const formSchema = z.object({
  url: z.string().min(1),
  name: z.string().min(1)
});

export const ImagesForm = ({
  initialData,
  catalogItemId
}: ImagesFormProps) =>{
  const [deletingId, setDeletingId] = useState<string | null>(null);

  
  const[isCreating, setIsCreating] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  const toggleCreating = () => {
    setIsCreating((current) => !current);
  };
  const router = useRouter();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.post(`/api/catalogItem/${catalogItemId}/images`, values);
      toast.success("Товар обновлен");
      toggleCreating();
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так")
    }
  }

  const onReorder = async (updateData: { id: string; position: number }[]) => {
    try {
      setIsUpdating(true);
      await axios.put(`/api/catalogItem/${catalogItemId}/images/reorder`, {
        list: updateData
      })
      toast.success("Порядок фото изменен");
      router.refresh
    } catch {
      toast.error("Что-то пошло не так")
    } finally {
      setIsUpdating(false);
    }
  }

  const onDelete = async (id: string) => {
    try {
      setDeletingId(id);
      await axios.delete(`/api/catalogItem/${catalogItemId}/images/${id}`);
      toast.success("Фото удалено");
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так")
    } finally {
      setDeletingId(null);
    }
  }

  return(
    <div className="relative mt-6 border bg-accent/50 rounded-md p-4">
      {isUpdating && (
        <div className="absolute z-10 h-full w-full bg-accent-foreground/40 top-0 right-0 bottom-0 rounded-md flex items-center justify-center">
          <Loader2 className="animate-spin h-6 w-6 text-accent brightness-75"/>
        </div>
      )}
      <div className="font-medium flex items-center justify-between">
        Фотографии товара 
        <Button onClick={toggleCreating} variant="ghost">
          {isCreating && (
            <>Отмена</>
          )}
          {!isCreating && (
            <>
              <PlusCircle className="h-4 w-4 mr-2"/>
              Добавить фото
            </>
          )}
        </Button>
      </div>
      {!isCreating && (
        <div className={cn(
          "text-sm mt-2",
          !initialData.imageSrcs.length && "text-accent italic"
        )}>
          {!initialData.imageSrcs.length && "Фотографий не обнаружено"}
          <ImagesList
            onDelete={onDelete}
            onReorder={onReorder}
            items={initialData.imageSrcs || []}
          />
        </div>
      )}
      {isCreating && (
        <div>
          <FileUpload 
            endpoint="CatalogItemImage"
            onChange={(url, name) => {
              if (url && name) {
                onSubmit({ url: url, name: name });
              }
            }}
            />
        </div>
      )}
      {!isCreating && (
        <p className="text-xs text-muted-foreground mt-4">
          Держите и перемещайте курсор для изменения порядка
        </p>
      )}
    </div>
  )
}
