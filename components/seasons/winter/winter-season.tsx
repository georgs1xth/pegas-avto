import { Button } from "@/components/ui/button"
import Image from "next/image"

const WinterSeason = () => {
  return (
    <div className="flex flex-col gap-4 relative">
        {/* <Image src={} fill className="object-contain"/> */}
        <h2 className="text-3xl font-medium">
            Запишитесь на установку автосигнализации
        </h2>
        <Button variant="default" size="lg" className="text-lg rounded-xl">
            Выбрать
        </Button>
    </div>
  )
}

export default WinterSeason