import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import Link from "next/link"

const AdminCatalogPage = () => {
  return (
    <div className="p-2 md:p-4 flex flex-col gap-4">
      <Link href="/admin/catalog/create/catalog-item" className='flex justify-center items-center'>
        <Button type="button" variant="default" size="inline" className="text-xl font-normal py-8 rounded-none">
          Добавить товар
        </Button>
      </Link>
      <Link href="/admin/catalog/catalog-items" className='flex justify-center items-center'>
        <Button type="button" variant="outline" size="inline" className="text-lg font-normal py-6 rounded-none">
          Настройки товаров
        </Button>
      </Link>
      <Link href="/admin/catalog/create/category" className='flex justify-center items-center'>
        <Button type="button" variant="default" size="inline" className="text-xl font-normal py-8 rounded-none">
          Добавить категорию
        </Button>
      </Link>
      <Link href="/admin/catalog/categories" className='flex justify-center items-center'>
        <Button type="button" variant="outline" size="inline" className="text-lg font-normal py-6 rounded-none">
          Настройки категорий
        </Button>
      </Link>
      <Link href="/admin/catalog/create/brand" className='flex justify-center items-center'>
        <Button type="button" variant="default" size="inline" className="text-xl font-normal py-8 rounded-none">
          Добавить бренд
        </Button>
      </Link>
      <Link href="/admin/catalog/brands" className='flex justify-center items-center'>
        <Button type="button" variant="outline" size="inline" className="text-lg font-normal py-6 rounded-none">
          Настройки брендов
        </Button>
      </Link>
    </div>
  )
}

export default AdminCatalogPage