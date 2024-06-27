import { SearchCatalog } from "@/components/search-input";
import db from "@/lib/db";
import { Suspense } from "react";
import { CatalogItemCard } from "./_components/catalog-item-card";

interface CatalogPageProps {
    searchParams: {
        title: string;
        categoryId: string;
    }
}


const CatalogPage = async ({
    searchParams
}: CatalogPageProps) => {

    const CatalogItems = await db.catalogItem.findMany({
        where: {
            title: {
                contains: searchParams.title
            },
            categoryId: searchParams.categoryId
        }
    })

    return ( 
        <div className="p-4 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <div className="md:hidden">
                <Suspense>
                    <SearchCatalog/>
                </Suspense>
            </div>
            <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {CatalogItems.map((CatalogItem) => (
                    <CatalogItemCard
                        key={CatalogItem.id}
                        id={CatalogItem.id}
                        imageSrc={CatalogItem.imageSrc!}
                        title={CatalogItem.title}
                        price={CatalogItem.Price!}
                        isAvailable={CatalogItem.isAvailable}
                        categoryId={CatalogItem.categoryId!}
                        brandId={CatalogItem.brandId!}
                    />
                ))}
            </div>
        </div>
     );
}
 
export default CatalogPage;

