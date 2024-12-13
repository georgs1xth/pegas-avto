import db from "@/lib/db";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { CameraOff, Check, Loader2Icon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { cn } from "@/lib/utils";

interface CatalogItemCardProps {
    id: string;
    imageSrc: string;
    title: string;
    price: number;
    isAvailable: boolean;
    brandId: string;
    categoryId?: string;
    isAdmin?: boolean;
    isPublished: boolean;
}

export const CatalogItemCard = async ({
    id,
    imageSrc,
    title,
    price,
    isAvailable,
    categoryId,
    isAdmin,
    isPublished,
}: CatalogItemCardProps) => {

    let categoryItem = null;
    if (categoryId != null)
    {
        categoryItem = await db.category.findUnique({
            where: {
                id: categoryId
            }
        })
    }
    const webReference = !!categoryItem?.webRef ? categoryItem.webRef : "Другое"

    const linkHref = !!isAdmin ? `/admin/catalog/catalog-items/${id}` :  `/catalog/${webReference}/${id}`

    const imageFromImageSrc = !!imageSrc ? await db.imageSrcMultiple.findUnique({
        where: {
            id: imageSrc
        }
    }) :
    0    
    
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
    

  return (
    <Link href={linkHref} className="w-full aspect-[16/7] p-2 grid grid-cols-2 gap-2 border shadow-sm hover:shadow-md rounded-lg hover:scale-[1.02] transition overflow-hidden">
        <div className="flex justify-center items-center py-2 relative">
                <AspectRatio ratio={16 / 12} className="rounded-lg flex justify-center items-center w-full relative">
                    {!!imageFromImageSrc ?
                    <Loader2Icon
                        className='absolute animate-spin w-20 h-20 text-accent-foreground/70'
                        strokeWidth="1"
                        style={{
                            animationDuration: "1.5s"
                        }}
                    /> : null
                    }
                    {!!imageFromImageSrc ? <Image  fill className="object-contain" src={imageFromImageSrc?.imageSrc!} alt={title}/> : <CameraOff/>}
                </AspectRatio>
                {!!isAdmin ? (
                    <>
                    {!!isPublished ? (
                        <Badge variant="approved" className="absolute left-2 bottom-2 h-6 w-6 p-1">
                            <Check className="h-4 w-4"/>
                        </Badge>
                    ) : (
                        <Badge variant="declined" className="absolute left-2 bottom-2 h-6 w-6 p-1">
                            <X className="h-4 w-4"/>
                        </Badge>
                    
                    )}
                    </>
                ) : null}
        </div>
        
        <div className="flex flex-col px-2 py-1 overflow-hidden">
            <h2
                className={cn(  "text-2xl",
                                !price && !!isAvailable && "text-accent-foreground/40",
                                !isAvailable && "text-accent-foreground/40",
                                !!price && !!isAvailable && "text-accent-foreground/90 font-semibold",
                )}
            >
                {!!isAvailable && !!price ? <>{formatPrice(price)}</>
                : !!isAvailable && !price ? <>Цена уточняется</>
                : <>Нет в наличии</>}

            </h2>

            <div className="text-base line-clamp-3 max-h-max flex-grow">{title}</div>

            <p className="text-muted-foreground text-xs line-clamp-1">{!!categoryItem?.name ? categoryItem.name : <>Другое</>}</p>
        </div>
    </Link>
  )
}

