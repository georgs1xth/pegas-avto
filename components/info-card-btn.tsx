"use client"

import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";

interface infoCardProps {
    btnHref: string;
}

const InfoCardBtn = ({
    btnHref,
}: infoCardProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push(btnHref)
    }

    return ( 
        <Button variant="secondary" onClick={onClick} className="h-full ml-3">
            <ArrowUpRight/>
        </Button>
     );
}
 
export default InfoCardBtn;