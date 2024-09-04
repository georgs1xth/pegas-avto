import { getCatalogItems } from "@/actions/getCatalogItems";
import { CatalogItemCard } from "@/components/catalog-item-card";
import { SearchCatalog } from "@/components/search-input";
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import db from "@/lib/db";
import { Filter } from "lucide-react";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { Suspense } from "react";
import FilterPrice from "./_components/filter-price";
import FilterParameters from "./_components/filter-parameters";



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
        sort: "asc" | "desc";
    }
}) => {

    
    const categoryDecoded = decodeURIComponent(params.category)

    const category = await db.category.findUnique({
        where: {
            webRef: categoryDecoded
        }
    })

    const categoryId = category?.id;

    
    if (!category){
        redirect("/catalog")
    }
    
    const items = await getCatalogItems({
        ...searchParams,
        categoryId,
    })

    const SORT_OPTIONS = [
        {name: "По умолчанию", value: "none"},
        {name: "Сначала дешевые", value: "asc"},
        {name: "Сначала дорогие", value: "desc"},
    ] as const

    const PARAMETERS = await db.categoryParam.findMany({
        where: {
            categoryId
        }
    })

    return ( 
        <>
            <div className="px-3 pt-3 flex flex-col gap-2 w-full">
                <div className="md:hidden">
                    <Suspense>
                        <SearchCatalog/>
                    </Suspense>
                </div>
                <FilterPrice
                    options={SORT_OPTIONS}
                />
            </div>
            {/* <FilterParameters
                options={PARAMETERS}
            /> */}
            <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-3 p-3">
                {/* <Suspense fallback={
                    (new Array(10)).map((item) => (
                        <Skeleton key={item} className="p-2 flex shadow-sm rounded-lg aspect-[3/4]"/>
                    ))}> */}
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
                {/* </Suspense> */}
            </div>
        </>
     );
}
 
export default CategoryPage;