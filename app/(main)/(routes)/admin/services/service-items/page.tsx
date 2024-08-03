import { CatalogItemCard } from "@/components/catalog-item-card"
import db from "@/lib/db"
import ServiceItemCrad from "../../../(public)/services/_components/service-item-card"
const AdminCatalogItemsPage = async () => {
  

    const serviceItems = await db.serviceItem.findMany()

    return (
    <div>
        <div className="p-2 md:p-4 grid lg:grid-cols-2 gap-2 md:gap-3">
            {serviceItems.map((item) => (
                <ServiceItemCrad
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.price!}
                    description={item.description!}
                    imageSrc={item.imageSrc!}
                    isAdmin={true}
                />
            ))}
        </div>
    </div>
  )
}

export default AdminCatalogItemsPage