import { useRouter } from "next/navigation";

import { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { cn } from "@/lib/utils";

interface infoCardProps {
    variant?: "default" | "success";
    label: string,
    description: string,
    icon: LucideIcon,
    wideness?: "one" | "two" | "three"
}

const InfoCard = ({
    variant,
    icon: Icon,
    label,
    description,
    wideness,
}: infoCardProps) => {

    return (
        <div className={cn("border rounded-lg flex flex-row p-6 gap-2 shadow-md col-span-1 xs:col-span-2",
                        wideness == "two" ? "sm:col-span-2" :
                        wideness == "three" ? "sm:col-span-3" :
                        "sm:col-span-1"
        )}>
            <div className="flex flex-col gap-2">
                <div className="flex items-start md:items-center gap-x-2 flex-col md:flex-row">
                    <IconBadge
                        variant={variant}
                        icon={Icon}
                    />
                    <div>
                        <h3 className="text-lg">
                            {label}
                        </h3>
                    </div>
                </div>
                <p className="text-slate-700 text-sm">
                    {description}
                </p>
            </div>
        </div>
     );
}
 
export default InfoCard;