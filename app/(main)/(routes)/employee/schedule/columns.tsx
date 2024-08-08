"use client"
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal, Pencil, Trash } from "lucide-react"
import { DeleteAction } from "./[appointmentId]/_components/delete-action"
import { Appointment } from "@prisma/client"
import Link from "next/link"
import { Checkbox } from "@/components/ui/checkbox"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
// export type Appointment = {
//   id: string
//   date: Date
//   amount: number
//   status: "В ожидании" | "Просрочен" | "Выполнен" | "Отменён"
//   name: string
//   phone: string
// }

export const Columns: ColumnDef<Appointment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "date",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Дата
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => {
        
        const date : Date = row.getValue("date")
        const formatted = format(new Date(date), 'HH:mm d MMMM', {
          locale: ru
        })

        return <div className="text-left">{formatted}</div>
    }
  },
  {
    accessorKey: "car",
    header: "Авто",
  },
  {
    accessorKey: "name",
    header: "Имя",
  },
  {
    accessorKey: "phone",
    header: "Номер телефона",
    cell: ({row}) => {
      return(
        <>
          <a href={`tel:${row.getValue("phone")}`} className="flex gap-2 items-center hover:bg-slate-200 transition pt-1 pb-2 px-2 rounded-md md:hidden">
            <p>
              {row.getValue("phone")}
            </p>
          </a>
          <p className='hidden md:block'>
            {row.getValue("phone")}
          </p>
        </>

      )
    }
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Предоплата</div>,
    cell: ({ row }) => {
        const amount = parseFloat(row.getValue("amount"))
        const formatted = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "KZT",
        }).format(amount)

        return <div className="text-right font-medium">{formatted}</div>
    }
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const appointment = row.original
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
              <Link href={`/employee/schedule/${appointment.id}`} className="flex justify-center items-center hover:bg-accent/50 w-full rounded-md overflow-hidden cursor-pointer">
                <DropdownMenuItem className="w-full hover:bg-accent/50">
                  <Pencil className="w-full h-16 rounded-md hover:bg-slate-200 py-4 cursor-pointer"/>
                </DropdownMenuItem>
              </Link>
            <DropdownMenuItem>
              <div className="w-full">
                <DeleteAction
                    appointmentId={appointment.id}
                    btnStyle="destructive"
                />
              </div>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]
