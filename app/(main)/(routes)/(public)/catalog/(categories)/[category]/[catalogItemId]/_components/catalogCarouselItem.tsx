
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ban, PlusCircle } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CatalogCarouselItemProps {
    id: string,
    imageSrc: string;
    imageAlt: string;
    classes?: string;
}

const CatalogCarouselItem = ({
    id,
    imageSrc,
    imageAlt,
    classes,

}: CatalogCarouselItemProps) => {

    return (

        <CarouselItem className="md:grid xl:basis-1/2 h-full">
            <div className="h-full">
                <AspectRatio ratio={16 / 13} className="rounded-xl h-full w-full overflow-hidden">
                    <Image fill className="object-cover overflow-hidden rounded-xl py-2 bg-accent-foreground/5" src={imageSrc} alt={imageAlt} loading="eager"/>
                </AspectRatio>
            </div>
        </CarouselItem>
     );
}
 
export default CatalogCarouselItem;