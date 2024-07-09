"use client"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, Pencil, Trash } from "lucide-react"
import { DeleteAction } from "./[appointmentId]/_components/delete-action"
import { Appointment } from "@prisma/client"
import { useRouter } from "next/navigation"

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

export const columns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "date",
    header: "Время записи",
  },
  {
    accessorKey: "status",
    header: "Статус",
  },
  {
    accessorKey: "name",
    header: "Имя",
  },
  {
    accessorKey: "phone",
    header: "Номер телефона",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Предоплачено</div>,
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
      const router = useRouter()
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
            <DropdownMenuLabel>Меню</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(appointment.phone)}
            >
              Скопировать номер телефона
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={()=> { 
                                      router.push(`/employee/schedule/${appointment.id}`)
                                    }}>
              <div className="flex justify-center align-center w-full">
                <Pencil/>
              </div>
            </DropdownMenuItem>
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
