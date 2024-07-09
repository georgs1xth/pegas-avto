import { DataTable } from "./data-table"

import { Columns } from "./columns"
import { Appointment } from "@prisma/client"
import db from "@/lib/db"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"

// export type Payment = {
//     id: string
//     date: Date
//     amount: number | false
//     status: "В ожидании" | "Просрочен" | "Выполнен" | "Отменён"
//     email: string
//   }


const SchedulePage = async () => {

  const data = await db.appointment.findMany()
  const router = useRouter();

  const onClick = () => {
    router.push('/employee/schedule/create/appointment')
  }

  return (
    <div className="p-4">
        <Button onClick={onClick}>
          Добавить запись
        </Button>
        <DataTable columns={Columns} data={data}/>
    </div>
  )
}

export default SchedulePage