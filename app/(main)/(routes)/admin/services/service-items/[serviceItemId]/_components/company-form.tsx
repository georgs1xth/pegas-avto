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
import { ServiceItem } from "@prisma/client";
import { Combobox } from "@/components/ui/combobox";

interface CompanyFormProps {
  initialData: ServiceItem
  serviceItemId: string;
  options: { label: string; value: string;}[];
};

const formSchema = z.object({
  companyId: z.string().min(1, {message: "Необходимо выбрать категорию"}),
});

export const CompanyForm = ({
  initialData,
  serviceItemId,
  options,
}: CompanyFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      companyId: initialData?.companyId || ""
    }, 
  });

  const { isSubmitting, isValid } = form.formState;

  
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/serviceItem/${serviceItemId}`, values);
      toast.success("Услуга обновлена");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так")
    }
  }

  const selectedOption = options.find((option) => option.value === initialData.companyId);

  return(
    <div className="mt-6 border bg-accent/50 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Категория товара 
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Отмена</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить категорию
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className={cn(
          "text-sm mt-2",
          !initialData.companyId && "text-slate-400 italic"
        )}>
          {selectedOption?.label || "Нет компании"}
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
              name="companyId"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Combobox
                      {...field}
                      options={options}
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
