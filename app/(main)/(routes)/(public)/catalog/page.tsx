import { SearchCatalog } from "@/components/search-input";
import db from "@/lib/db";
import CatalogCategories from "./_components/catalog-categories";
import { Metadata } from "next";


export const metadata: Metadata = {
    title: "Каталог товаров",
    description: "Широкий выбор товаров для вашего автомобиля. Ремонт, установка доп. оборудования, заправка автокондиционеров и многое другое.",    
};

interface CatalogPageProps {
}


const CatalogPage = async ({
}: CatalogPageProps) => {


    const categories = await db.category.findMany({
        where: {
            items: {
                some: {}
            }
        },
        orderBy: {
            id: "asc"
        }
    });


    // categories.push({id: "1", name: "Автосигнализации", webRef: "Автосигнализации", imageSrc: "/category-images/B97v2_LTE_GPS.png"})
    // categories.push({id: "2", name: "Парктроники", webRef: "Парктроники", imageSrc: "/slider-images/Starline.jpeg"})
    // categories.push({id: "3", name: "Push-start кнопки", webRef: "Push-start", imageSrc: "/slider-images/Starline.jpeg"})
    // categories.push({id: "4", name: "Системы отслеживания", webRef: "Системы-отслеживания", imageSrc: "/slider-images/Starline.jpeg"})

    return ( 
        <div className="p-4 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <CatalogCategories
                items={categories}
            />
        </div>
     );
}
 
export default CatalogPage;

