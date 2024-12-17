import { Button } from "@/components/ui/button"
import db from "@/lib/db"
import Link from "next/link"

const AdminCompanyPage = async () => {

    const companies = await db.company.findMany();

  return (
    <div className="p-2 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {companies.map((company) => (
            <Link key={company.id} href={`/admin/services/company/${company.id}`} className="flex justify-center items-center bg-accent/20 rounded-2xl hover:bg-accent/40 transition-all">
                {company.name}
            </Link>
        ))}
    </div>
  )
}

export default AdminCompanyPage