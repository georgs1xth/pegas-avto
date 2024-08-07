import { useRouter } from "next/navigation";

import { ArrowUpRight, LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { cn } from "@/lib/utils";
import InfoCardBtn from "./info-card-btn";

interface infoCardProps {
    variant?: "default" | "success";
    label: string,
    description: string,
    icon: LucideIcon,
    wideness?: "one" | "two" | "three",
    addButton?: boolean,
    btnHref?: string
}

const InfoCard = ({
    variant,
    icon: Icon,
    label,
    description,
    wideness,
    addButton,
    btnHref,
}: infoCardProps) => {

    return (
        <div className={cn("border rounded-lg p-6 col-span-1 xs:col-span-2 shadow-md flex hover:scale-y-[1.03] hover:scale-x-[1.03] active:scale-x-[1.03] hover:shadow-lg hover:z-50 transition bg-card dark:bg-accent/40",
                        wideness == "two" ? "sm:col-span-2" :
                        wideness == "three" ? "sm:col-span-3" :
                        "sm:col-span-1"
        )}> 
            <div className="flex flex-row gap-2">
                <div className="flex flex-col gap-2">
                    <div className="flex items-start md:items-center gap-x-2 gap-y-2 flex-col md:flex-row">
                        <IconBadge
                            variant={variant}
                            icon={Icon}
                        />
                        <div>
                            <h3 className="text-lg leading-snug">
                                {label}
                            </h3>
                        </div>
                    </div>
                    <p className="text-card-foreground/80 text-sm">
                        {description}
                    </p>
                </div>
            </div>
            {!!addButton && !!btnHref ? <InfoCardBtn
            btnHref={btnHref}
            /> : null}
        </div>
     );
}
 
export default InfoCard;