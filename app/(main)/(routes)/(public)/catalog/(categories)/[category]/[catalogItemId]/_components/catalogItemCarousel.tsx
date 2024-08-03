"use client"

import {
    Carousel,
    CarouselContent,
    CarouselNext,
    CarouselPrevious
  } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems";

import Autoplay from "embla-carousel-autoplay";
import { CatalogItem, ImageSrcMultiple, MainCarouselItem } from "@prisma/client";
import CatalogCarouselItem from "./catalogCarouselItem";

interface CatalogItemCarouselProps {
    carouselItems: ImageSrcMultiple[]
}

const CatalogItemCarousel = ({
    carouselItems
} : CatalogItemCarouselProps) => {


    return ( 
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    }),
                ]}
                className="relative"
            >
                {/* <CarouselPrevious className="absolute left-0 top-[50%] z-2"/>
                <CarouselNext className="absolute right-0 top-[50%] z-2"/> */}
                <CarouselContent>
                    { !!carouselItems && carouselItems.length > 0 ?
                    carouselItems.map((item) => (
                        <CatalogCarouselItem
                            key={item.id}
                            id={item.id}
                            imageSrc={item.imageSrc!} 
                            imageAlt={item.id}
                    />
                    )) :
                    <CatalogCarouselItem
                            id="404"
                            imageSrc="" 
                            imageAlt="Error"
                    />
                    }
                </CarouselContent>
            </Carousel>
     );
}
 
export default CatalogItemCarousel;