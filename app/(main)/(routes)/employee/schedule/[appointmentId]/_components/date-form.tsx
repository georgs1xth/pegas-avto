"use client";

import * as z from "zod";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useState } from "react";



import {
  Form,
  FormLabel,
  FormDescription,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CalendarIcon, Pencil } from "lucide-react";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Appointment } from "@prisma/client";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";


interface DateFormProps {
  initialData: Appointment
  appointmentId: string;
};

const formSchema = z.object({
  date: z.date()
});

export const DateForm = ({
  initialData,
  appointmentId
}: DateFormProps) =>{
  const [isEditing, setIsEditing] = useState(false);
  const [calendarOpen, setCalendarOpen] = useState(false);


  const toggleEdit = () => setIsEditing((current) => !current);

  const router = useRouter();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
        date: initialData.date
    }, 
  });

  const { isSubmitting, isValid } = form.formState;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try{
      await axios.patch(`/api/schedule/${appointmentId}`, values);
      toast.success("Запись обновлена");
      toggleEdit();
      router.refresh();
    } catch {
      toast.error("Что-то пошло не так");
    }
  }

  return(
    <div className="mt-6 border bg-slate-100 rounded-md p-4">
      <div className="font-medium flex items-center justify-between">
        Дата и время
        <Button onClick={toggleEdit} variant="ghost">
          {isEditing ? (
            <>Отмена</>
          ) : (
            <>
              <Pencil className="h-4 w-4 mr-2" />
              Изменить
            </>
          )}
        </Button>
      </div>
      {!isEditing && (
        <p className="text-sm mt-2">
          {initialData.date.toLocaleString()}
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
