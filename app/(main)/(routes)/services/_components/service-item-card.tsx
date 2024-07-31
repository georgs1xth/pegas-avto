import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";


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
            <div className="absolute left-0 inset-0 h-full w-[60%] z-0">
                <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background opacity-100"></div>
            </div>
            <div className="flex flex-col items-end gap-2 w-[60%] text-end mr-2 relative z-1">
                <h2 className="text-md font-medium text-accent-foreground">{title}</h2>
                <p className="text-xs text-accent-foreground/90">{description}</p>
                <Link href={`services/${id}`} className="w-[80%] rounded-xl">
                    <Button variant="outline" className="w-full text-accent-foreground/90" type="button">Подробнее</Button>
                </Link>
            </div>
        </div>
  )
}

export default ServiceItemCrad