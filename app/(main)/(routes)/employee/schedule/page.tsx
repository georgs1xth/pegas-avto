import { DataTable } from "./data-table"

import { Columns } from "./columns"
import db from "@/lib/db"
import Link from "next/link"
import { Button } from "@/components/ui/button"

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
    <div className="p-4 flex flex-col gap-2 items-end">
        
        <div className="w-full">
          <DataTable columns={Columns} data={data}/>
        </div>
    </div>
  )
}

export default SchedulePage