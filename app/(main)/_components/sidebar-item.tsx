"use client";

import { cn } from "@/lib/utils";
import { Loader2Icon, LucideIcon } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

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

    const [isLoading, setIsLoading] = useState(false);

    const onClick = () => {
        setIsLoading(true);
        router.push(href);
        setTimeout(() => {
            setIsLoading(false);
        }, 500);
    }

    return ( 
        <button
        onClick={onClick}
        type="button"
        className={cn(
            "flex items-center mx-2 rounded-xl text-muted-foreground text-sm font-[500] pl-6 transition-all hover:text-accent-foreground hover:bg-foreground/10 dark:hover:bg-foreground/10",
            isActive && "text-foreground bg-muted-foreground/10 hover:bg-foreground/10 hover:text-accent-foreground"
        )}
        >
            <div className="flex items-center gap-x-2 py-4">
                {!!isLoading ?
                <Loader2Icon 
                    size={22}
                    className={cn(
                        "text-accent-foreground/70 animate-spin",
                        isActive && "text-accent-foreground"
                    )}
                />
                    :
                <Icon 
                    size={22}
                    className={cn(
                        "text-popover-foreground/70",
                        isActive && "text-foreground"
                    )}
                />}
                {label}
            </div>
        </button>
     );
}
 
export default SidebarItem;