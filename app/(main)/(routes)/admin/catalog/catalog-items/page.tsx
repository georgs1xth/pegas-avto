import { CatalogItemCard } from "@/components/catalog-item-card"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import db from "@/lib/db"
const AdminCatalogItemsPage = async () => {

    const catalogItems = await db.catalogItem.findMany({
        include: {
            imageSrcs: {
                select: {
                    id: true,
                    position: true,
                },
                orderBy: {
                    position: "asc"
                }
            },
        },
        orderBy: {
            categoryId: "desc"
        }
    })

    return (
    <div>
        <Breadcrumb className="p-3">
            <BreadcrumbList>
            <BreadcrumbItem>
                    <BreadcrumbLink href="/admin">Главная администратора</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
                    <BreadcrumbLink href="/admin/catalog">Настройки каталога</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator/>
            <BreadcrumbItem>
                    <BreadcrumbPage>Настройки товаров</BreadcrumbPage>
            </BreadcrumbItem>
            </BreadcrumbList>
        </Breadcrumb>

        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3 p-3">
            {catalogItems.map((item) => (
                <CatalogItemCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.Price!}
                    imageSrc={item.imageSrcs[0]?.id}
                    isAvailable={item.isAvailable}
                    brandId={item.brandId!}
                    categoryId={item.categoryId!}
                    isAdmin={true}
                    isPublished={item.isPublished}
                    // description={item.description}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminCatalogItemsPage