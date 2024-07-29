"use client";

import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

interface SidebarItemProps {
    icon: LucideIcon;
    label: string;
    href: string;
}

const SidebarItem = ({
    icon: Icon,
    label,
    href,
} : SidebarItemProps) => {

    const pathname = usePathname();
    const router = useRouter();
    
    const isActive = 
    (pathname === "/" && href === "/") ||
    pathname === href || pathname?.startsWith(`${href}/`);

    const onClick = () => {
        router.push(href);
    }

    return ( 
        <button
        onClick={onClick}
        type="button"
        className={cn(
            "flex items-center mx-2 rounded-xl text-muted-foreground text-sm font-[500] pl-6 transition-all hover:text-accent-foreground hover:bg-muted-foreground/10 dark:hover:bg-foreground/10",
            isActive && "text-foreground bg-foreground/10 hover:bg-foreground/10 hover:text-accent-foreground"
        )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={22}
                    className={cn(
                        "text-popover-foreground/70",
                        isActive && "text-foreground"
                    )}
                />
                {label}
            </div>
        </button>
     );
}
 
export default SidebarItem;