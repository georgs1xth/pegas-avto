import { SearchCatalog } from "@/components/search-input";
import db from "@/lib/db";
import { Suspense } from "react";
import { CatalogItemCard } from "../../../../components/catalog-item-card";
import { getCatalogItems } from "@/actions/getCatalogItems";
// import { CatalogItemsList } from "@/components/catalog-items-list";
import CatalogCategories from "./_components/catalog-categories";

interface CatalogPageProps {
    searchParams: {
        title: string;
        categoryId: string;
    }
}


const CatalogPage = async ({
    searchParams
}: CatalogPageProps) => {

    // const catalogItems = await getCatalogItems({
    //     ...searchParams
    // })

    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    });


    categories.push({id: "1", name: "Автосигнализации", webRef: "Автосигнализации", imageSrc: "/slider-images/Starline.jpeg"})
    categories.push({id: "2", name: "Парктроники", webRef: "Парктроники", imageSrc: "/slider-images/Starline.jpeg"})
    categories.push({id: "3", name: "Push-start кнопки", webRef: "Push-start", imageSrc: "/slider-images/Starline.jpeg"})
    categories.push({id: "4", name: "Системы отслеживания", webRef: "Системы-отслеживания", imageSrc: "/slider-images/Starline.jpeg"})

    return ( 
        <div className="p-4 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <div className="md:hidden">
                <Suspense>
                    <SearchCatalog/>
                </Suspense>
            </div>
            <CatalogCategories
                items={categories}
            />
            {/* <CatalogItemsList
                items={catalogItems}
            /> */}
        </div>
     );
}
 
export default CatalogPage;

