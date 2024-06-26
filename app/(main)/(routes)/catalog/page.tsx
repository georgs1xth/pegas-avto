import { SearchCatalog } from "@/components/search-input";
import db from "@/lib/db";
import { Suspense } from "react";

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
            
        }
    })

    return ( 
        <div className="p-4 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <div className="flex justify-center align-center md:hidden">
                <Suspense>
                    <SearchCatalog/>
                </Suspense>
            </div>
            {CatalogItems.map((CatalogItem) => (
                <div>
                    {CatalogItem.title}
                </div>
            ))}
        </div>
     );
}
 
export default CatalogPage;

