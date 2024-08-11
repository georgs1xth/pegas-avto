"use client";


import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useEffect, useState } from "react";

const WinterSeason = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const today = new Date();
    const start = new Date(today.getFullYear(), 9, 1); // October 1
    const end = new Date(today.getFullYear() + 1, 3, 1); // April 1 of the next year

    // Adjust end date if today is before April 1 of the current year
    if (today < new Date(today.getFullYear(), 3, 1)) {
      end.setFullYear(today.getFullYear());
    }

    if (today >= start && today < end) {
      setIsVisible(true);
    }
  }, []);


  return (
    isVisible && (
    <div className="flex flex-col w-full h-[calc(100svh-75px)] overflow-hidden md:hidden">
        <h2 className="text-3xl font-medium">
            Надежная защита и умный комфорт в ваш автомобиль
        </h2>
        <div className="flex-grow relative">
          <Image src="/seasons/winter/StarLineE96v2.png" alt="фото сезонного баннера" fill className="object-contain"/>
        </div>
        <Button variant="default" size="lg" className="text-lg rounded-xl w-full">
            Подобрать автосигнализацию
        </Button>
    </div>)
  )
}

export default WinterSeason