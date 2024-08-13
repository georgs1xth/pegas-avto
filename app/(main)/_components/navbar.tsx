"use client";

import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { SearchCatalog } from "@/components/search-input";
import { usePathname } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogIn, Skull, Zap } from "lucide-react";
import AccountButtons from "@/components/account-buttons";
import { cn } from "@/lib/utils";

const Navbar = ({
    children,
    isAdmin,
}: {
    children: React.ReactNode,
    isAdmin: boolean
}) => {

    const pathname = usePathname();

    const isCatalogPage = pathname.includes("/catalog/");

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
        // <div className="p-4 border-b h-full flex items-center bg-background/60 backdrop-blur-md shadow-sm w-full justify-between z-10">

        //         <Link href="/" className="flex pl-4 justify-center justify-self-center scale">
        //             {!!isAdmin ? 
        //                 <h1 className="text-md font-medium flex gap-1 justify-center items-center">
        //                     <Zap className="text-accent"/>
        //                     <div className="flex flex-col gap-0">
        //                         <span className="text-xs h-[10px] text-accent">made by </span>
        //                         Georgiy
        //                     </div>
        //                 </h1>
        //                 :            
        //                 <Logo />
        //             }
        //         </Link>

        //     {isCatalogPage && (
                
        //             <div className="ml-10 hidden md:block">
        //                 <SearchCatalog/>
        //             </div>
        //     )}
            

        //     <div className="hidden ml-auto gap-3 justify-center items-center md:flex">
        //         <AccountButtons/>
        //         <NavbarRoutes>
        //             {children}
        //         </NavbarRoutes>
        //     </div>
        //     <div className="ml-auto md:hidden flex justify-center items-center gap-4">
        //         <AccountButtons/>
        //         <MobileSidebar>
        //             {children}
        //         </MobileSidebar>
        //     </div>
        // </div>
    //  );
    <header className={cn('flex p-2 h-full w-full transition-all duration-100 border-b bg-background/50 backdrop-blur-md',
        !!isScrolled && !!isMainPage ? 'shadow-lg dark:shadow-accent/30 md:shadow-none md:duration-0' : null,
    )}>
      <div className='flex items-center justify-between transition-all duration-100 w-full'>
        <Link href="/" className={cn("transition-all transform translate-x-6 scale-[1.3]",
                        !!isScrolled && !!isMainPage && "transform translate-x-0 scale-100 md:scale-150 md:translate-x-1/2",
                        !isMainPage && "translate-x-0 md:translate-x-1/3 xl:translate-x-1/2 scale-100 md:scale-125 xl:scale-150"
        )}>
            <Logo/>
        </Link>
        {isCatalogPage && (
            <div className="ml-[5.5rem] xl:ml-40 hidden md:block">
                <SearchCatalog/>
            </div>
        )}
        <div className="hidden ml-auto gap-3 justify-center items-center md:flex">
            <AccountButtons/>
            <NavbarRoutes>
                {children}
            </NavbarRoutes>
        </div>
        <div className="md:hidden flex justify-center items-center gap-4 pr-2">
            <AccountButtons/>
            <MobileSidebar>
                {children}
            </MobileSidebar>
        </div>
      </div>
    </header>
    )
}
 
export default Navbar;