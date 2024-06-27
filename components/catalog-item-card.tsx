import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { CameraOff } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface CatalogItemCardProps {
    id: string;
    imageSrc: string;
    title: string;
    price: number;
    isAvailable: boolean;
    brandId: string;
    category: string;
}

export const CatalogItemCard = ({
    id,
    imageSrc,
    title,
    price,
    isAvailable,
    category
}: CatalogItemCardProps) => {
  return (
    <Link href={`/catalog/categories/${category}/${id}`}>
        <div className="p-2 grid gap shadow-md rounded-lg hover:scale-105 hover:-rotate-[1deg] transition">
            <div>
                <AspectRatio ratio={15 / 9} className="rounded-lg border flex justify-center items-center w-full">
                    {!!imageSrc ? <Image src={imageSrc} alt={title}/> : <CameraOff/>}
                </AspectRatio> 
            </div>
            <div className="px-2 py-1 overflow-hidden">
                {!!price && !!isAvailable ? <h2 className="text-lg font-semibold text-slate-900">{price.toString()} тг </h2> :
                !!price ? <h2 className="text-base text-slate-400">цена уточняется</h2> :
                !!isAvailable ? <h2>Нет в наличии</h2> :
                <h2 className="text-md text-slate-400">Нет в наличии</h2>}
                <div className="flex flex-col gap-1 justify-between">
                        <div className="text-sm line-clamp-2 h-10">{title}</div>
                    <div>
                        <p className="text-muted-foreground text-xs">{category}</p>            
                    </div>
                </div>
            </div>
        </div>
    </Link>
  )
}

