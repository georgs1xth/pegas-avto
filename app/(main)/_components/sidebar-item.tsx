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
            "flex items-center mx-2 rounded-xl text-slate-500 text-sm font-[500] pl-6 transition-all hover:text-slate-600 hover:bg-slate-300/20",
            isActive && "text-black bg-slate-300/20 hover:bg-slate-300/20 hover:text-black"
        )}
        >
            <div className="flex items-center gap-x-2 py-4">
                <Icon 
                    size={22}
                    className={cn(
                        "text-slate-500",
                        isActive && "text-black"
                    )}
                />
                {label}
            </div>
        </button>
     );
}
 
export default SidebarItem;