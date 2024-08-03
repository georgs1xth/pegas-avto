import { AspectRatio } from "@/components/ui/aspect-ratio"
import db from "@/lib/db"
import Image from "next/image"
import { redirect } from "next/navigation"
import CatalogItemCarousel from "./_components/catalogItemCarousel"
import { cn } from "@/lib/utils"

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
    <div className="p-4 flex flex-col gap-3 md:flex-row md:gap-6">
      <div className="md:w-[calc(50%-12px)]">
        <CatalogItemCarousel
          carouselItems={item.imageSrcs}
        />
      </div>
      <div className="flex flex-col text-start w-full md:w-[calc(50%-12px)] gap-2.5">
        <div className="flex flex-col text-start gap-1.5">
          <h2 className="text-lg font-medium">
            {item.title}
          </h2>

          {/* category and availability div  */}

          <div className="flex gap-2">
            <p className="text-xs">
              {decodeURI(params.category)}
            </p>
            <div className="h-[16px] w-[1px] bg-accent-foreground/60"/>
            <p className={cn("text-xs",
              !!item.isAvailable && "text-emerald-600",
              !item.isAvailable && "text-red-600"
            )}>
              {!!item.isAvailable && <p>Есть в наличии</p>}
              {!item.isAvailable && <p>Нет в наличии</p>}
            </p>
          </div>

          <h3 className="text-lg md:text-base">
            {formatPrice(item.Price!)}
          </h3>
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="text-base font-medium">Краткое описание</h3>
          <p className="text-xs">
            Автосигнализация старлайн b97
          </p>
        </div>
      </div>
    </div>
  )
}

export default CatalogItemPage