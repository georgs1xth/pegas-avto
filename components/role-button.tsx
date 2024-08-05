import { checkRole } from "@/app/utils/check-role"
import Link from "next/link"
import { Button } from "./ui/button"
import { LucideShieldAlert, Pencil } from "lucide-react"

const RoleButton = () => {
  return (
    <div>
        {checkRole("admin") ?
                    <Link href="/admin/main" className="flex justify-center items-center">
                        <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20" type="button">
                            <LucideShieldAlert className="h-5 w-5"/>
                            <p className="sr-only">Страница администратора</p>
                        </Button>
                    </Link> 
                    : checkRole("moderator") ?
                    <Link href="/employee/schedule" className="flex justify-center items-center">
                        <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20">
                            <Pencil className="h-5 w-5"/>
                        </Button>
                    </Link> : null
                    }
    </div>
  )
}

export default RoleButton