"use client";


import { TextEffect } from "@/components/core/text-effect";
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { InView } from "@/components/core/in-view";

const WinterSeason = () => {

  // const [isVisible, setIsVisible] = useState(true);

  // useEffect(() => {
  //   const today = new Date();
  //   const start = new Date(today.getFullYear(), 9, 1); // October 1
  //   const end = new Date(today.getFullYear() + 1, 3, 1); // April 1 of the next year

  //   // Adjust end date if today is before April 1 of the current year
  //   if (today < new Date(today.getFullYear(), 3, 1)) {
  //     end.setFullYear(today.getFullYear());
  //   }

  //   if (!!(today >= start && today < end)) {
  //     setIsVisible(true);
  //   }
  // }, []);


  return (
    <div className="flex flex-col w-full h-[calc(100svh-75px)] overflow-hidden md:hidden">
        <TextEffect per='char' as='h2' preset='blur' className="text-3xl font-medium">
          Надежная защита и умный комфорт в ваш автомобиль
        </TextEffect>
        <div className='flex-grow relative'>
        <InView
          variants={{
            hidden: { opacity: 0.3, scale: 0.8, filter: 'blur(10px)' },
            visible: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
          className="size-full"
        >
            <Image src="/seasons/winter/StarLineE96v2.png" alt="фото сезонного баннера" fill className="object-contain size-full" loading="eager"/>
        </InView>
        </div>
        <InView
          variants={{
            hidden: { opacity: 0.3, scale: 0.9, filter: 'blur(10px)' },
            visible: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                staggerChildren: 0.09,
              },
            },
          }}
        >
        <Button variant="default" size="lg" className="text-lg rounded-xl w-full">
            Подобрать автосигнализацию
        </Button>
        </InView>
    </div>
  )
}

export default WinterSeason