"use client"

import {
    Carousel,
    CarouselContent,
    CarouselNext
  } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems";

import Autoplay from "embla-carousel-autoplay";
import { MainCarouselItem } from "@prisma/client";

interface mainCarouselProps {
    carouselItems: MainCarouselItem[]
}

const MainCarousel = ({
    carouselItems
}: mainCarouselProps) => {


    return ( 
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 4000,
                    })
                ]}
            >
                <CarouselContent className="">

                    { !!carouselItems && carouselItems.length > 0 ?
                    carouselItems.map((item) => (
                        <CarouselItems 
                            key={item.id}
                            id={item.id}
                            imageSrc={item.imageUrl!} 
                            imageAlt={item.title}
                            btnHref={item.btnHref!} 
                            itemTitle={item.title} 
                            itemDescription={item.description!}
                    />
                    )) :
                    <CarouselItems 
                        id="1"
                        imageSrc="/slider-images/Starline.jpeg" 
                        imageAlt="установка starline" 
                        btnHref="/catalog/signalisations/starline" 
                        itemTitle="StarLine — надежная защита вашего автомобиля." itemDescription="Установка Автосигнализаций."
                    />
                    }
                    
                    {/* <CarouselItems 
                        imageSrc="/slider-images/Starline.jpeg" 
                        imageAlt="установка starline" 
                        btnHref="/catalog/signalisations/starline" 
                        itemTitle="StarLine — надежная защита вашего автомобиля." itemDescription="Установка Автосигнализаций."
                    />
                    <CarouselItems 
                        imageSrc="/slider-images/ac-automobile.jpg" 
                        imageAlt="заправка автокондиционеров" classes="" 
                        btnHref="/services/auto-air-conditioning" 
                        itemTitle="Не дайте жаре помешать вашему комфорту!" 
                        itemDescription="Заправка и ремонт Автокондиционеров."
                    />
                    <CarouselItems 
                        imageSrc="/slider-images/diagnostics2.jpeg" 
                        imageAlt="компьютерная диагностика" 
                        btnHref="/services/computer-diagnostics" 
                        itemTitle="Выявляем проблемы авто компьютерной диагностикой." itemDescription="Компьютерная диагностика авто."
                    />
                    <CarouselItems 
                        imageSrc="/slider-images/vskrytiye.jpg" 
                        imageAlt="вскрытие и пр" 
                        btnHref="/services/computer-diagnostics" 
                        itemTitle="Оставили ключи в машине или сел аккумулятор? Не беда" itemDescription="Аварийное вскрытие и прикуривание авто."
                    /> */}
                </CarouselContent>
            </Carousel>
     );
}
 
export default MainCarousel;