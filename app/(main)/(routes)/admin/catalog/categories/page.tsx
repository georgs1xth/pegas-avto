import { CatalogItemCard } from "@/components/catalog-item-card"
import db from "@/lib/db"
import CatalogCategoryItem from "../../../catalog/_components/catalog-category-item"
const AdminCategoriesPage = async () => {
  

    const categories = await db.category.findMany({
    })

    return (
    <div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-2 md:p-4">
            {categories.map((item) => (
                <CatalogCategoryItem
                key={item.id}
                imageSrc={item.imageSrc!}
                value={item.id}
                label={item.name}
                webRef={item.webRef!}
                isAdmin={true}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminCategoriesPage