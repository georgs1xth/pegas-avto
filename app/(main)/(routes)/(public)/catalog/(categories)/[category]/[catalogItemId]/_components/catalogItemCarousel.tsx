"use client"
import {
    Carousel,
    CarouselMainContainer,
    CarouselNext,
    CarouselPrevious,
    CarouselThumbsContainer,
    SliderThumbItem,
  } from "@/components/ui-extension/carousel";
import Autoplay from "embla-carousel-autoplay";
import Fade from "embla-carousel-fade";
import {ImageSrcMultiple} from "@prisma/client";
import CatalogCarouselItem from "./catalogCarouselItem";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

interface CatalogItemCarouselProps {
    carouselItems: ImageSrcMultiple[]
}

const CatalogItemCarousel = ({
    carouselItems
} : CatalogItemCarouselProps) => {

    // const options = {
    //     containScroll: false
    //   }

    // const orientation = 

    return ( 
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                        stopOnInteraction: false,
                        stopOnFocusIn: false,
                    }),
                ]}
                className="flex flex-col gap-2 w-full h-full overflow-visible"
                orientation="horizontal"
            >
                <CarouselNext className="top-1/3 right-2 -translate-y-1/3" />
                <CarouselPrevious className="top-1/3 left-2 -translate-y-1/3" />
                <div className="relative basis-3/4">
                <CarouselMainContainer className="">
                    { !!carouselItems && carouselItems.length > 0 ?
                    carouselItems.map((item) => (
                        <CatalogCarouselItem
                            key={item.position}
                            imageSrc={item.imageSrc!} 
                            imageAlt={item.id}
                    />
                    )) :
                    <CatalogCarouselItem
                            imageSrc="" 
                            imageAlt="Error"
                    />
                    }
                </CarouselMainContainer>
                </div>
                <CarouselThumbsContainer className="w-full basis-1/4 gap-2 p-1">
                    {carouselItems.map((item) => (
                        <SliderThumbItem
                            key={item.id}
                            index={item.position}
                            className="aspect-[16/13] outline outline-1 outline-border size-full rounded-md"
                        >
                            <AspectRatio ratio={16/13}>
                                <div className="flex items-center justify-center h-full w-full rounded-md cursor-pointer bg-background aspect-[16/13]">
                                    
                                        <Image src={item.imageSrc!} alt={`Фото номер ${item.position}`} fill objectFit="contain" className="object-cover"/>
                                </div>
                            </AspectRatio>
                        </SliderThumbItem>
                    ))}
                </CarouselThumbsContainer>
            </Carousel>
     );
}
 
export default CatalogItemCarousel;