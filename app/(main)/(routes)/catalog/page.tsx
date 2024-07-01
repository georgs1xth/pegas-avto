import { SearchCatalog } from "@/components/search-input";
import db from "@/lib/db";
import { Suspense } from "react";
import { CatalogItemCard } from "../../../../components/catalog-item-card";
import { getCatalogItems } from "@/actions/getCatalogItems";
import { CatalogItemsList } from "@/components/catalog-items-list";

interface CatalogPageProps {
    searchParams: {
        title: string;
        categoryId: string;
    }
}


const CatalogPage = async ({
    searchParams
}: CatalogPageProps) => {

    const catalogItems = await getCatalogItems({
        ...searchParams
    })

    return ( 
        <div className="p-4 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <div className="md:hidden">
                <Suspense>
                    <SearchCatalog/>
                </Suspense>
            </div>
            <CatalogItemsList
                items={catalogItems}
            />
            
        </div>
     );
}
 
export default CatalogPage;

