
import { Button } from "@/components/ui/button"
import Image from "next/image"

const WinterSeason = () => {
  return (
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
    </div>
  )
}

export default WinterSeason