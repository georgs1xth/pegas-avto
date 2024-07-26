import { Button } from "@/components/ui/button";
import db from "@/lib/db";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { CameraOff, Check, CircleCheck, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "./ui/badge";

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

    const linkHref = !!isAdmin ? `/admin/catalog/catalog-items/${id}` :  `/catalog/categories/${webReference}/${id}`

    const imageFromImageSrc = !!imageSrc ? await db.imageSrcMultiple.findUnique({
        where: {
            id: imageSrc
        }
    }) :
    0
    
     



  return (
    <Link href={linkHref}>
        <div className="p-2 grid gap shadow-sm hover:shadow-md rounded-lg hover:scale-[1.03] md:hover:scale-105 hover:-rotate-[0.5deg] md:hover:-rotate-[1deg] transition">
            <div className="relative flex justify-center items-center">
                <AspectRatio ratio={16 / 12} className="rounded-lg  flex justify-center items-center w-full">
                    {!!imageFromImageSrc ? <Image fill src={imageFromImageSrc?.imageSrc!} alt={title}/> : <CameraOff/>}
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
                {!!price && !!isAvailable ? <h2 className="text-lg font-semibold text-slate-900">{price.toString()} тг </h2> :
                !price && !!isAvailable ? <h2 className="text-base text-slate-400">цена уточняется</h2> :
                <h2 className="text-md text-slate-400">Нет в наличии</h2>}
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

