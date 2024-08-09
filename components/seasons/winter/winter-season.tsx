import { Button } from "@/components/ui/button"
import Image from "next/image"

const WinterSeason = () => {
  return (
    <div className="flex flex-col gap-4 relative w-full min-h-max h-[calc(100svh-60px)] overflow-hidden pb-5">
        <h2 className="text-3xl font-medium">
            Надежная защита и умный комфорт уже доступны для вашего автомобиля
        </h2>
        <Image src="/seasons/winter/StarLineE96v2.png" alt="фото сезонного баннера" width={400} height={400} className="object-contain scale-150 -rotate-90 w-full h-full"/>
        <Button variant="default" size="lg" className="text-lg rounded-xl">
            Записаться
        </Button>
    </div>
  )
}

export default WinterSeason