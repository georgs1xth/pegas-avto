"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Ban, PlusCircle } from "lucide-react";

interface SlideOverviewProps {
    id: string,
    imageSrc?: string;
    imageAlt: string;
    classes?: string;
    btnHref?: string;
    itemTitle: string;
    itemDescription?: string;
}

const SlideOverview = ({
    id,
    imageSrc,
    imageAlt,
    classes,
    btnHref,
    itemTitle,
    itemDescription,

}: SlideOverviewProps) => {

    const pathname = usePathname()

    !!btnHref ? btnHref = btnHref : btnHref = pathname

    const router = useRouter();
    const onClick = () => {
        router.push(`${btnHref}`)
    }

    return (

        <div className="w-full h-full">
            <Link href={btnHref} className="cursor-pointer">
                <div className="h-full">
                    <AspectRatio ratio={15 / 9} className="rounded-xl shadow-md h-full w-full overflow-hidden">
                        {id === "addCarouselItem" ?
                        <div className="flex justify-center items-center w-full h-full bg-slate-200/50">
                            <PlusCircle className="w-14 h-14 text-slate-600"/>
                        </div> :
                        !!imageSrc ?
                        <Image fill className="object-cover overflow-hidden rounded-xl shadow-md" src={imageSrc} alt={imageAlt}/> :
                        <div className="flex justify-center items-center w-full h-full">
                            <Ban className="w-14 h-14 text-red-500"/>
                        </div>
                        }
                    </AspectRatio>
                </div>
            </Link>
            <div className="flex flex-col justify-between md:min-h-[135px] max-h-max">
                <div className="flex flex-col justify-center items-center text-center mt-2">
                    <h3 className="lg:text-xl md:text-lg text-lg font-normal text-slate-700">
                        {itemTitle}
                    </h3>
                    {!!itemDescription ? <p className="text-muted-foreground text-sm">
                        {itemDescription}
                    </p> : null}
                </div>
                <div className="justify-center mt-2 hidden md:flex ">
                    <Button variant="outline" onClick={onClick} className="rounded-2xl" size="inline">
                        Подробнее
                    </Button>
                </div>
            </div>
        </div>
     );
}
 
export default SlideOverview;