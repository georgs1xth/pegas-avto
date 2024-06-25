import { LucideIcon } from "lucide-react";
import { IconBadge } from "@/components/icon-badge";
import { cn } from "@/lib/utils";
import { cp } from "fs";
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
        <div className={cn("border rounded-lg flex flex-row p-6 gap-2 shadow-md",
                        wideness == "two" ? "col-span-2" :
                        wideness == "three" ? "col-span-3" :
                        "col-span-1"
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
                <p className="text-slate-700">
                    {description}
                </p>
            </div>
        </div>
     );
}
 
export default InfoCard;