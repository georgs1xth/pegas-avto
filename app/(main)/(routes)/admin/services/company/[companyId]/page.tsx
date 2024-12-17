import db from "@/lib/db"
import ServiceItemCrad from "../../../../(public)/services/_components/service-item-card"
import { Item } from "react-stately";

const AdminServicesItemsPage = async ({
    params
}: {
    params: { companyId: string}
}) => {
    const companyId = decodeURI(params.companyId);

    let serviceItems;
    
    if (companyId === "no-company") {
        serviceItems = await db.serviceItem.findMany({
            where: {
                companyId: undefined
            },
            orderBy: {
                companyId: "desc"
            }
        });
    } else {
        serviceItems = await db.serviceItem.findMany({
            where: {
                companyId: params.companyId
            },
            orderBy: {
                companyId: "desc"
            }
        });
    }
    

    return (
    <div>
        <div className="p-2 md:p-4 grid lg:grid-cols-2 gap-2 md:gap-3">
            {serviceItems.map((item) => (
                <>
                {companyId == "no-company" && (
                    <div>
                        {item.companyId == null && (
                            <ServiceItemCrad
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                price={item.price!}
                                description={item.description!}
                                imageSrc={item.imageSrc!}
                                companyId={"no-company"}
                                isAdmin={true}
                            />
                        )
                        }       
                    </div>
                )    
                }
                {companyId != "no-company" && (
                    <div>
                        {item.companyId == companyId && (
                            <ServiceItemCrad
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            price={item.price!}
                            description={item.description!}
                            imageSrc={item.imageSrc!}
                            companyId={item.companyId!}
                            isAdmin={true}
                        />
                        )
                        }
                    </div>
                )}
                </>
            ))}
        </div>
    </div>
  )
}

export default AdminServicesItemsPage