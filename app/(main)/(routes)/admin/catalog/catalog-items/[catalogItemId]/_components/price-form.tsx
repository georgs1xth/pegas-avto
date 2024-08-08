"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Textarea } from "@/components/ui/textarea";
import { CatalogItem, MainCarouselItem } from "@prisma/client";
import { Input } from "@/components/ui/input";

interface PriceFormProps {
  initialData: CatalogItem
  catalogItemId: string;
};

const formSchema = z.object({
  Price: z.number().positive()
});

export const PriceForm = ({
  initialData,
  catalogItemId
}: PriceFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      Price: initialData?.Price || 10000
    },
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/catalogItem/${catalogItemId}`, values);
      toast.success("Товар обновлен");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так")
    }
  }

  return(
    <div className="mt-6 border bg-accent/50 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Цена товара
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Отмена</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить цену
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-sm mt-2",
          !initialData.Price && "text-slate-400 italic"
        )}>
          {initialData.Price || "Нет позиции"}
        </p>
      )}
      {isEditing && (
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-4"
          >
            <FormField 
              control={form.control}
              name="Price"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number" 
                      disabled={isSubmitting}
                      placeholder="Например: 777"
                      {...field}
                      onChange={(e) => {
                        const value = parseFloat(e.target.value);
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex items-center gap-x-2">
              <Button
                disabled={!isValid || isSubmitting}
                type="submit"
                >
                Сохранить
              </Button>
            </div>
          </form>
        </Form>
      )}
    </div>
  )
}
