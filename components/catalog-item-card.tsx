import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { CameraOff, Check, CircleCheck, Loader2Icon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";
import { Suspense } from "react";
import { Skeleton } from "./ui/skeleton";
import { cn } from "@/lib/utils";

interface CatalogItemCardProps {
    id: string;
    imageSrc: string;
    title: string;
    price: number;
    isAvailable: boolean;
    brandId: string;
    categoryId: string;
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

        const categoryItem = await db.category.findUnique({
            where: {
                id: categoryId
            }
        })

    const webReference = !!categoryItem?.webRef ? categoryItem.webRef : "Другое"

    const linkHref = !!isAdmin ? `/admin/catalog/catalog-items/${id}` :  `/catalog/${webReference}/${id}`

    const imageFromImageSrc = !!imageSrc ? await db.imageSrcMultiple.findUnique({
        where: {
            id: imageSrc
        }
    }) :
    0
    
     



  return (
    <Link href={linkHref}>
        <div className="p-2 flex flex-col justify-evenly border shadow-sm hover:shadow-md rounded-lg hover:scale-[1.03] md:hover:scale-105 hover:-rotate-[0.5deg] md:hover:-rotate-[1deg] transition aspect-[3/4]">
            <div className="relative flex justify-center items-center py-2">
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
            <div className="px-2 py-1 overflow-hidden">
                <h2
                    className={cn(  "text-lg",
                                    !price && !!isAvailable && "text-accent-foreground/40",
                                    !isAvailable && "text-accent-foreground/40",
                                    !!price && !!isAvailable && "text-accent-foreground/90 font-semibold",
                    )}
                >
                    {!!isAvailable && !!price ? <>{price.toString()}</>
                    : !!isAvailable && !price ? <>Цена уточняется</>
                    : <>Нет в наличии</>}

                </h2>
                {/* {!!price && !!isAvailable ? <h2 className="text-lg font-semibold text-slate-900">{price.toString()} тг </h2> :
                !price && !!isAvailable ? <h2 className="text-lg text-slate-400">цена уточняется</h2> :
                <h2 className="text-lg text-slate-400">Нет в наличии</h2>} */}

                <div className="flex flex-col gap-1 justify-between">
                        <div className="text-sm line-clamp-2 max-h-max">{title}</div>
                    <div>
                        <p className="text-muted-foreground text-xs">{!!categoryItem?.name ? categoryItem.name : <>Другое</>}</p>            
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

