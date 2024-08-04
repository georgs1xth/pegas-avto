import { getCatalogItems } from "@/actions/getCatalogItems";
import { CatalogItemCard } from "@/components/catalog-item-card";
import { SearchCatalog } from "@/components/search-input";
import { Skeleton } from "@/components/ui/skeleton";
import db from "@/lib/db";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";



export async function generateMetadata({
    params,
 }: {
    params: {category: string}},
  ): Promise<Metadata> {
    // read route params
    const category = decodeURI(params.category)
   
    // fetch data
    const item = await db.category.findUnique({
        where: {
            webRef: category
        }
    })

    if(!item){
        return redirect(`/catalog`)
    }

    return {
      title: item.name,
    }
  }

const CategoryPage = async ({
    params,
    searchParams
}: {
    params: {category: string},
    searchParams: {
        title: string;
    }
}) => {

    
    const categoryDecoded = decodeURIComponent(params.category)

    const category = await db.category.findUnique({
        where: {
            webRef: categoryDecoded
        }
    })

    const categoryId = category?.id;

    const items = await getCatalogItems({
        ...searchParams,
        categoryId,
    })

    

    if (!category){
        redirect("/catalog")
    }

    


    return ( 
        <>
            <div className="md:hidden px-2 py-4">
                <Suspense>
                    <SearchCatalog/>
                </Suspense>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
                <Suspense fallback={
                    (new Array(10)).map((item) => (
                        <Skeleton key={item} className="p-2 flex shadow-sm hover:shadow-md rounded-lg aspect-[3/4]"/>
                        
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
        </>
     );
}
 
export default CategoryPage;