import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

const AdminServicesPage = () => {
  return (
    <div className="p-2 md:p-4 flex flex-col gap-4">
      <Link href="/admin/services/create/service" className='flex justify-center items-center'>
        <Button type="button" variant="default" size="inline" className="text-xl font-normal py-8 rounded-2xl">
          Добавить услугу
        </Button>
      </Link>
      <Link href="/admin/services/company" className='flex justify-center items-center'>
        <Button type="button" variant="outline" size="inline" className="text-lg font-normal py-6 rounded-2xl">
          Настройки услуг
        </Button>
      </Link>
    </div>
  )
}

export default AdminServicesPage