import { Button } from "@/components/ui/button";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Heart } from "lucide-react";
import Image from "next/image";

interface CatalogItemCardProps {
    id: String;
    imageSrc: string;
    title: string;
    description?: String;
    price?: Number;
    isAvailable: Boolean;
    categoryId?: String;
    brandId?: String;
}

export const CatalogItemCard = ({
    id,
    imageSrc,
    title,
    description,
    price,
    isAvailable,
    categoryId,
    brandId
}: CatalogItemCardProps) => {
  return (
    <div className="p-2 grid gap">
        <div>
            <AspectRatio ratio={15 / 9} className="rounded-lg border">
                <img src={imageSrc} alt={title} />
            </AspectRatio> 
        </div>
        {!!price && !!isAvailable ? <h2 className="text-base">{price.toString()}</h2> :
        !!price ? <h2 className="text-base text-slate-400">цена уточняется</h2> :
        !!isAvailable ? <h2>Нет в наличии</h2> :
        <h2 className="text-md text-slate-400">Нет в наличии</h2>}
        <div className="flex flex-col gap-2">
            <div>
                <p className="text-sm">{title}</p>            
            </div>
            <div>
                <Button size="sm" variant="item">
                    Подробнее
                </Button>
                <Button className="h-min w-min">
                    <Heart className="h-4 w-4"/>
                </Button>
            </div>
        </div>
    </div>
  )
}

