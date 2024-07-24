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

const formSchema = z.object({
  title: z.string().min(3, { message:"Необходимо название товара"}).max(50, {message: "Название слишком большое"}),
  Price: z.number({
    required_error: "Необходима цена товара",
    invalid_type_error: "Введите только цифры"
  })
})

const CreateCatalogItemPage = () => {

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      Price: 10000,
    }
  });


  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      const response = await axios.post("/api/catalogItem/", values)
      router.push(`/admin/catalog/${response.data.id}`)
      toast.success("Товар создан")
    } catch {
      toast.error("Что-то пошло не так");
    }
  }
  
  return (
    <div className="max-w-5xl mx-auto flex md:mt-[10%] justify-center sm:mt-[5%] h-full p-6">
      <div>
        <h1 className="text-2xl">Добавление товара</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-8"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Название товара
                </FormLabel>
                <FormControl>
                    <Input 
                    disabled={isSubmitting}
                    placeholder="Например: Starline a93 2CAN-2LIN"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    Введите название товара. Слишком большое название сократится.
                </FormDescription>
                <FormMessage />
              </FormItem>}
            />
            <FormField
              control={form.control}
              name="Price"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Цена
                </FormLabel>
                <FormControl>
                    <Input 
                      type="number"
                      disabled={isSubmitting}
                      placeholder="Например: 5000"
                      {...field}
                      onChange={ (e) => {
                        const value = parseFloat(e.target.value);
                        field.onChange(value);
                      }}
                    />
                  </FormControl>
                <FormDescription>
                    Введите цену товара.
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

export default CreateCatalogItemPage;