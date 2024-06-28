
import { checkRole } from "@/app/utils/check-role"
import Link from "next/link"

const GoAdmin = () => {
  return (
    <div>
        {checkRole("admin") ? 
                <div className="flex items-center gap-4 p-5">
                    <h1 className="">
                        You are an admin. Do you want to enter Admin Dashboard?
                    </h1>
                    <Link href="/admin/dashboard" className="bg-slate-900 text-white py-2 px-4 rounded-md">
                        Yes
                    </Link>
                </div> : <div></div>}
    </div>
  )
}

export default GoAdmin