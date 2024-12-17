import { Logo } from "@/app/(main)/_components/logo";
import { Button } from "@/components/ui/button"
import db from "@/lib/db"
import Link from "next/link"

const AdminCompanyPage = async () => {

    const companies = await db.company.findMany();

  return (
    <div className="p-2 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {companies.map((company) => (
            <Link key={company.id} href={`/admin/services/company/${company.id}`} className="flex justify-center items-center bg-accent/20 rounded-2xl hover:bg-accent/40 transition-all p-8">
                {company.name == "Пегас avto A" && (
                    <div className="flex justify-center items-center max-w-fit rounded-xl">
                        <div className="scale-125">
                            <Logo/>
                        </div>
                    </div>
                )}
                {company.name == "Инжектор Сервис" && (
                    <div className="pb-2 flex justify-center items-center max-w-fit text-2xl rounded-xl font-bold text-yellow-800 dark:text-red-700">
                        Injector Service
                    </div>
                )}
            </Link>
        ))}
    </div>
  )
}

export default AdminCompanyPage