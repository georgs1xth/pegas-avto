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
import { MainCarouselItem } from "@prisma/client";

interface BtnHrefFormProps {
  initialData: MainCarouselItem
  slideId: string;
};

const formSchema = z.object({
  btnHref: z.string()
});

export const BtnHrefForm = ({
  initialData,
  slideId
}: BtnHrefFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      btnHref: initialData?.btnHref || ""
    }, 
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/main/slider-items/${slideId}`, values);
      toast.success("Slide updated");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Something went wrong")
    }
  }

  return(
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Ссылка слайда 
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Отмена</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить ссылку
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-sm mt-2",
          !initialData.btnHref && "text-slate-400 italic"
        )}>
          {initialData.btnHref || "Нет ссылки"}
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
              name="btnHref"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea 
                      disabled={isSubmitting}
                      placeholder="Введите ссылку после .com/ Например: /catalog"
                      {...field}
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
