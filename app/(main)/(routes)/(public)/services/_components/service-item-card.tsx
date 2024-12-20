
import styles from '../_styles/service-item-card.module.css'

import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import Image from "next/image";
import Link from "next/link";

interface ServiceItemCradProps {
    id: string;
    title: string;
    description: string;
    price: number;
    imageSrc: string;
    companyId: string | undefined;
    isAdmin: boolean;
}


const ServiceItemCrad = ({
    id,
    title,
    description,
    price,
    imageSrc,
    companyId,
    isAdmin,
} : ServiceItemCradProps) => {

    const linkHref = !!isAdmin ? `/admin/services/company/${companyId}/${id}` :  `/services/${id}`;


  return (
        <div className={cn(styles.cardContainer, "w-full h-full flex justify-end relative border shadow-sm rounded-3xl overflow-hidden p-3")}>
            <div className="absolute left-0 inset-0 h-full w-[60%] z-0">
                {/* gradient with img */}
                {!!imageSrc ?
                <Image 
                    src={imageSrc} 
                    alt={title}  
                    style={{ objectFit: 'cover' }} 
                    fill
                    loading='eager'
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                /> :
                null
                }
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-background opacity-100"></div>
            </div>
            <div className="flex flex-col items-end gap-2 w-[100%] text-end mr-2 relative z-1">
                <h2 className="text-md font-medium text-accent-foreground">{title}</h2>
                <p className="text-xs text-accent-foreground/90 line-clamp-2 w-[65%]">{description}</p>
                <Link href={`${linkHref}`} className="rounded-xl z-10">
                    <Button variant="default" className={cn("rounded-xl px-6", styles.btnOverlay)} type="button">Подробнее</Button>
                </Link>
            </div>
            <div className={cn("opacity-0 z-5 absolute backdrop-blur-md bg-background/50 dark:bg-background/30 w-full h-full inset-0 transition-all p-3 flex justify-start" ,styles.hoverOverlay)}>
                <div className="flex flex-col items-start gap-2 max-w-[calc(100%-3rem-90px)]">
                    {price > 1000 ?
                        <h2 className="text-lg font-medium text-accent-foreground">От {price} тг</h2>
                    : <h2 className='text-lg font-medium text-accent-foreground'>Цена договорная</h2>
                    }
                    <p className="text-xs font-medium text-accent-foreground/90 line-clamp-4">{description}</p>
                </div>
            </div>
        </div>
  )
}

export default ServiceItemCrad