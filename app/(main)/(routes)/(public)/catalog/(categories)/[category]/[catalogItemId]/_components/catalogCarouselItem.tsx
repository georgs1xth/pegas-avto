
import { AspectRatio } from "@/components/ui/aspect-ratio";

import {
    Carousel,
    CarouselMainContainer,
    CarouselThumbsContainer,
    SliderMainItem,
    SliderThumbItem,
  } from "@/components/ui-extension/carousel";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Ban, PlusCircle } from "lucide-react";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CatalogCarouselItemProps {
    imageSrc: string;
    imageAlt: string;
    classes?: string;
}

const CatalogCarouselItem = ({
    imageSrc,
    imageAlt,
    classes,

}: CatalogCarouselItemProps) => {

    return (

        <SliderMainItem className="h-full">
            <div className="h-full">
                <AspectRatio ratio={16 / 13} className="rounded-xl h-full w-full overflow-hidden">
                    <Image fill objectFit="contain" className="object-cover overflow-hidden py-4 rounded-xl border border-muted bg-accent/10" src={imageSrc} alt={imageAlt} loading="eager"/>
                </AspectRatio>
            </div>
        </SliderMainItem>
     );
}
 
export default CatalogCarouselItem;