"use client";

import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import TopNav from "./top-nav";

const Navbar = () => {

    const pathname = usePathname();

    const isMainPage = pathname === "/";

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <header className={cn('flex p-2 h-full w-full transition-all duration-100 border-b border-t-[3px] border-t-[#e30016] bg-background/50 backdrop-blur-md',
        !!isScrolled && !!isMainPage ? 'shadow-lg md:shadow-none md:duration-0' : null,
    )}>
      <div className='flex items-center transition-all duration-100 w-full mx-auto max-w-[1140px] px-1'>
        <Link href="/" className="flex items-center pl-2 shrink-0">
            <Logo/>
        </Link>
        <div className="hidden md:flex ml-6">
            <TopNav/>
        </div>
        <div className="hidden ml-auto gap-3 justify-center items-center md:flex">
            <a
                href="https://wa.me/77023923222"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#e30016] hover:bg-[#b80012] text-white text-sm font-bold px-4 py-2 transition-colors"
            >
                Написать нам
            </a>
            <div className="flex gap-[2px]">
                <span className="px-[9px] py-[6px] text-[13px] font-bold bg-[#101010] text-white border border-[#101010]">RU</span>
                <a href="/kk" hrefLang="kk-KZ" className="px-[9px] py-[6px] text-[13px] font-bold text-muted-foreground border hover:text-[#e30016] hover:border-[#e30016] transition-colors">KZ</a>
            </div>
        </div>
        <div className="md:hidden flex ml-auto justify-end items-center gap-4 pr-2">
            <MobileSidebar/>
        </div>
      </div>
    </header>
    )
}

export default Navbar;
