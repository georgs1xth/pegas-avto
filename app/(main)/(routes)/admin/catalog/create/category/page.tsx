"use client";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  name: z.string().min(3),
  webRef: z.string().min(3)
})

const CreateCategoryPage = () => {

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      webRef: "",
    }
  });


  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      const response = await axios.post("/api/category/", values)
      router.push(`/admin/catalog/categories/${response.data.id}`)
      toast.success("Товар создан")
    } catch {
      toast.error("Что-то пошло не так");
    }
  }

  
  const [outputValue, setOutputValue] = useState('');

  
  return (
    <div className="max-w-5xl mx-auto flex md:mt-[10%] justify-center sm:mt-[5%] h-full p-6">
      <div>
        <h1 className="text-2xl">Добавление категории</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Название №1
                </FormLabel>
                <FormControl>
                    <Input 
                    disabled={isSubmitting}
                    placeholder="Например: Starline a93 2CAN-2LIN"
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
                    Введите название категории. Слишком большое название сократится.
                </FormDescription>
                <FormMessage />
              </FormItem>}
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
                <Link href="/admin/catalog">
                    <Button
                        type="button"
                        variant="ghost"
                    >
                        Отмена
                    </Button>
                </Link>
                <Button
                    type="submit"
                    disabled={!isValid || isSubmitting}
                >
                    Продолжить
                </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  )
}

export default CreateCategoryPage;