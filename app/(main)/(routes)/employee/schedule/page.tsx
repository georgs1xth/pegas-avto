import { DataTable } from "./data-table"

import { Columns } from "./columns"
import { Appointment } from "@prisma/client"
import db from "@/lib/db"

// export type Payment = {
//     id: string
//     date: Date
//     amount: number | false
//     status: "В ожидании" | "Просрочен" | "Выполнен" | "Отменён"
//     email: string
//   }


const SchedulePage = async () => {

  const data = await db.appointment.findMany()

  return (
    <div className="p-4">
        <DataTable columns={Columns} data={data}/>
    </div>
  )
}

export default SchedulePage