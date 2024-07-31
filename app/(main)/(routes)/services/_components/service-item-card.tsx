import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";


interface ServiceItemCradProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageSrc: string;
}


const ServiceItemCrad = ({
    id,
    title,
    description,
    price,
    imageSrc,
} : ServiceItemCradProps) => {
  return (
        <div className="w-full h-full flex justify-end relative border shadow-sm rounded-3xl overflow-hidden p-2">
            <Image className="absolute left-0 w-[60%] h-full" src={imageSrc} alt={title} fill/>
            <div className="flex flex-col items-end gap-2 w-[60%] text-end mr-2">
                <h2 className="text-md font-medium">{title}</h2>
                <p className="text-xs">{description}</p>
                <Button variant="outline" className="w-[80%] rounded-xl">Подробнее</Button>
            </div>
        </div>
  )
}

export default ServiceItemCrad