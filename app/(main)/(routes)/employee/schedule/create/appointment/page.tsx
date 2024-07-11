"use client";

import validator from "validator";

import * as z from "zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

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
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

import Link from "next/link";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";

const formSchema = z.object({
  phone: z.string().refine(validator.isMobilePhone),
  amount: z.number({
    required_error: "Необходима предоплата",
    invalid_type_error: "Введите только цифры"
  }),
  date: z.date()
})

const AppointmentCreatePage = () => {

  const [calendarOpen, setCalendarOpen] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      phone: "+7",
      amount: 0,
      date: new Date()
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
    <div className="max-w-5xl mx-auto flex md:mt-[10%] justify-center sm:mt-[5%] h-full p-6">
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
                    Введите номер клиента в международном формате. <br/> Например: +7 707 705 0852
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
                    Введите сумму предоплаты. Если предоплаты не было, оставьте 0.
                </FormDescription>
                <FormMessage />
              </FormItem>}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
            <FormItem>
              <Popover
                open={calendarOpen}
                onOpenChange={(open) => setCalendarOpen(open)}
            >
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      className={cn(
                        'w-full pl-3 text-left font-normal',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {field.value ? (
                        `${field.value.toLocaleString([], {
                          year: 'numeric',
                          month: 'numeric',
                          day: 'numeric',
                          hour: '2-digit',
                          minute: '2-digit',
                        })}`
                      ) : (
                        <span>Выбрать дату и время</span>
                      )}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent>
                  <Calendar
                    className="p-0"
                    mode="single"
                    selected={field.value}
                    onSelect={field.onChange}
                    disabled={(date) => date > new Date('2050-01-01') || date < new Date('1900-01-01')}
                    initialFocus
                  />
                  <Input
                    type="time"
                    className="mt-2"
                    // take locale date time string in format that the input expects (24hr time)
                    value={field.value.toLocaleTimeString([], {
                      hourCycle: 'h23',
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                    // take hours and minutes and update our Date object then change date object to our new value
                    onChange={(selectedTime) => {
                      const currentTime = field.value;
                      currentTime.setHours(
                        parseInt(selectedTime.target.value.split(':')[0]),
                        parseInt(selectedTime.target.value.split(':')[1]),
                        0,
                      );
                      field.onChange(currentTime);
                    }}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
              <FormDescription>
                Выберите дату и время записи
              </FormDescription>
            </FormItem>
          )}
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