"use client";

import validator from "validator";

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
  phone: z.string().refine(validator.isMobilePhone),
  amount: z.number({
    required_error: "Необходима предоплата",
    invalid_type_error: "Введите только цифры"
  })
})

const AppointmentCreatePage = () => {

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "+7",
      amount: 0,
    }
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      const response = await axios.post("/api/schedule/", values)
      router.push(`/employee/schedule/${response.data.id}`)
      toast.success("Запись создана")
    } catch {
      toast.error("Что-то пошло не так");
    }
  }
  
  return (
    <div className="max-w-5xl min-w-max mx-auto flex md:mt-[10%] justify-center sm:mt-[5%] h-full p-6">
      <div>
        <h1 className="text-2xl">Создание записи</h1>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-4 mt-8"
          >
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Номер клиента
                </FormLabel>
                <FormControl>
                    <Input 
                    disabled={isSubmitting}
                    placeholder="Например: +7 707 705 0852"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    Введите номер клиента
                </FormDescription>
                <FormMessage />
              </FormItem>}
            />
            <FormField
              control={form.control}
              name="amount"
              render={({ field }) => 
              <FormItem>
                <FormLabel>
                    Предоплата
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
                    Введите сумму предоплаты
                </FormDescription>
                <FormMessage />
              </FormItem>}
            />
            <div className="flex items-center gap-x-2">
                <Link href="/employee/schedule">
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

export default AppointmentCreatePage;