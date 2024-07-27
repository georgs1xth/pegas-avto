import { CatalogItemCard } from "@/components/catalog-item-card";
import { Skeleton } from "@/components/ui/skeleton";
import db from "@/lib/db";
import { redirect } from "next/navigation";
import { Suspense } from "react";


const CategoryPage = async ({
    params
}: {
    params: {category: string}
}) => {

    const categoryDecoded = decodeURIComponent(params.category)

    const category = await db.category.findUnique({
        where: {
            webRef: categoryDecoded
        }
    })

    if (!category){
        redirect("/catalog")
    }

    const items = await db.catalogItem.findMany({
        where: {
            categoryId: category?.id,
            isPublished: true,
        },
        include: {
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
    
    const simpleKeys=[1, 2, 3, 4, 5, 6, 7, 8, 9]


    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
            <Suspense fallback={
                simpleKeys.map((item) => (
                <Skeleton key={item} className="p-2 grid gap shadow-sm hover:shadow-md rounded-lg aspect-[3/4]"/>
                    
            ))}>
            {items.map((item) => (
                
                <CatalogItemCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.Price!}
                    imageSrc={item.imageSrcs[0]?.id}
                    isAvailable={item.isAvailable}
                    brandId={item.brandId!}
                    categoryId={item.categoryId!}
                    isPublished={item.isPublished}
                    // description={item.description}
                    />
                ))}
            </Suspense>
        </div>
     );
}
 
export default CategoryPage;