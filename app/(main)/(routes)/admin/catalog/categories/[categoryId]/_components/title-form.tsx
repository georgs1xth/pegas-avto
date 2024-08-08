"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Category } from "@prisma/client";

interface TitleFormProps {
  initialData: Category;
  categoryId: string;
};

const formSchema = z.object({
  name: z.string().min(1, {
    message: "Необходим заголовок",
  }),
  webRef: z.string().min(1)
});

export const TitleForm = ({
  initialData,
  categoryId
}: TitleFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: initialData.name,
      webRef: initialData.webRef || ""
    }, 
  });

  const { isSubmitting, isValid } = form.formState;

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

  const [outputValue, setOutputValue] = useState('');


  return(
    <div className="mt-6 border bg-accent/50 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Заголовок категории
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Отмена</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить заголовок
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2">
          {initialData.name}
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Название №1
                  </FormLabel>
                  <FormControl>
                    <Input 
                      disabled={isSubmitting}
                      placeholder="Например: Автосигнализации"
                      {...field}
                      onChange={(e) => {
                        const value = e.target.value;
                        field.onChange(value);
                        
                        setOutputValue(value.replace(/ /g, "-"))
                        form.setValue("webRef", value.replace(/ /g, "-"))
                      }}
                    />
                  </FormControl>
                <FormDescription>
                    Это название категории. Заполняется рабским трудом.
                </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="webRef"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Название №2
                </FormLabel>
                <FormControl>
                    <Input
                      {...field}
                      disabled={isSubmitting}
                      value={outputValue}
                      readOnly
                      placeholder="Название категории в поисковой строке"
                    />
                  </FormControl>
                <FormDescription>
                    Это название категории без пробелов. Заполняется автоматически.
                </FormDescription>
                <FormMessage />
              </FormItem>}
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
