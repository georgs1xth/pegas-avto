import { AspectRatio } from "@/components/ui/aspect-ratio"
import db from "@/lib/db"
import Image from "next/image"
import { redirect } from "next/navigation"
import CatalogItemCarousel from "./_components/catalogItemCarousel"
import { cn } from "@/lib/utils"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import { Preview } from "@/components/preview"
import { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: {category: string, catalogItemId: string},
}): Promise<Metadata> {
  // read route params
  const category = decodeURI(params.category)
  const id = params.catalogItemId
 
  // fetch data
  const item = await db.catalogItem.findUnique({
      where: {
          id
      }
  })

  if(!item){
      return redirect(`/catalog`)
  }

  return {
    title: item.title,
    description: item.description
  }
}




const CatalogItemPage = async ({
  params,
}: {
  params: {category: string, catalogItemId: string},
}) => {


  function formatPrice(price: number) {
    // Assuming price is a number (e.g., 1234.56)
    const formattedPrice = price.toFixed(0); // Always show 2 decimal places
  
    // Add thousands separators (optional)
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  
    // Add currency symbol (optional)
    const currencySymbol = '₸'; // You can customize this
    return `${parts.join('.')} ${currencySymbol}`;
  }

  const item = await db.catalogItem.findUnique({
    where: {
      id: params.catalogItemId
    },
    include: {
      imageSrcs: {
        orderBy: {
          position: "asc"
        }
      }
    }
  })

  if(!item){
    return redirect(`/catalog/${params.category}`)
  }

  return (
    <>
    <Breadcrumb className="p-4 pb-0">
        <BreadcrumbList>
            
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                </BreadcrumbItem>
            
            <BreadcrumbSeparator />
            
                <BreadcrumbItem>
                    <BreadcrumbLink href="/catalog">Все товары</BreadcrumbLink>
                </BreadcrumbItem>
            
            <BreadcrumbSeparator />

                <BreadcrumbItem>
                    <BreadcrumbLink href={`/catalog/${params.category}`}>{decodeURI(params.category)}</BreadcrumbLink>
                </BreadcrumbItem>
            
            <BreadcrumbSeparator />
                
                <BreadcrumbItem>
                    <BreadcrumbPage>{item.title}</BreadcrumbPage>
                </BreadcrumbItem>

        </BreadcrumbList>
      </Breadcrumb>
    <div className="p-4 flex flex-col gap-3 lg:flex-row lg:gap-6">
      
      <div className="lg:w-[calc(50%-12px)] overflow-hidden">
        <CatalogItemCarousel
          carouselItems={item.imageSrcs}
          />
      </div>
      <div className="flex flex-col text-start w-full md:w-[calc(50%-12px)] gap-2.5">
        <div className="flex flex-col text-start gap-1.5">
          <h2 className="text-2xl font-medium">
            {item.title}
          </h2>

          {/* category and availability div  */}

          <div className="flex gap-2">
            <p className="text-sm">
              {decodeURI(params.category)}
            </p>
            <div className="h-[20px] w-[1px] bg-accent-foreground/60"/>
            <p className={cn("text-sm",
              !!item.isAvailable && "text-emerald-600",
              !item.isAvailable && "text-red-600"
            )}>
              {!!item.isAvailable && <>Есть в наличии</>}
              {!item.isAvailable && <>Нет в наличии</>}
            </p>
          </div>

          <h3 className="text-lg md:text-base">
            {formatPrice(item.Price!)}
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-medium">Описание</h3>
          <Preview value={item.description!}/>
        </div>
      </div>
    </div>
    </>
  )
}

export default CatalogItemPage