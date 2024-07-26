import { CatalogItemCard } from "@/components/catalog-item-card"
import db from "@/lib/db"
const AdminCatalogItemsPage = async () => {
  

    const catalogItems = await db.catalogItem.findMany({
        where: {
            isPublished: true
        },
        include: {
            category:{
                select:{
                    id: true
                }
            },
            imageSrcs: {
                select: {
                    id: true,
                }
            }
        },
        orderBy: {
            isAvailable: "desc",
        }
    })

    return (
    <div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
            {catalogItems.map((item) => (
                <CatalogItemCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.Price!}
                    imageSrc={item.imageSrcs[0]?.id}
                    isAvailable={item.isAvailable}
                    brandId={item.brandId!}
                    categoryId={item.category?.id!}
                    isAdmin={false}
                    isPublished={item.isPublished}
                    // description={item.description}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminCatalogItemsPage