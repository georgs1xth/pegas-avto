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

  const texts = ["Надежная защита", "Умный комфорт", "Автозапуск"];
  const [currentText, setCurrentText] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 5000); // Change text every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [texts.length]);



  return (
    <div className="flex flex-col w-full h-[calc(100svh-75px)] overflow-hidden md:hidden px-4 pt-[5svh] pb-[10svh]">
        <div className="gap-1">
          <TextEffect per="char" as='h2' preset='blur' className="text-3xl font-semibold text-center">
            {texts[currentText]}
          </TextEffect>
          <TextEffect per="char" as="h3" preset="blur" className="text-2xl font-normal text-center">
            уже в вашем автомобиле.
          </TextEffect>  
        </div>
        <div className='flex-grow relative'>
        <InView
          variants={{
            hidden: { opacity: 0.3, scale: 0.8, filter: 'blur(10px)' },
            visible: {
              opacity: 1,
              scale: 1,
              filter: 'blur(0px)',
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="size-full -mt-[1svh]"
        >
            <Image src="/seasons/winter/StarLineE96v2hq.png" alt="фото сезонного баннера" fill className="object-contain size-full overflow-hidden" loading="eager"/>
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
          className="mx-auto"
        >
        <Button variant="super" size="lg" className="text-lg rounded-xl w-max">
            Подобрать автосигнализацию
        </Button>
        </InView>
    </div>
  )
}

export default WinterSeason