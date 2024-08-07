"use client";

import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { SearchCatalog } from "@/components/search-input";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { LogIn, Skull, Zap } from "lucide-react";
import AccountButtons from "@/components/account-buttons";

const Navbar = ({
    children,
    isAdmin,
}: {
    children: React.ReactNode,
    isAdmin: boolean
}) => {

    const pathname = usePathname();

    const isCatalogPage = pathname.includes("/catalog/");

    return ( 
        <div className="p-4 border-b h-full flex items-center bg-background/60 backdrop-blur-md shadow-sm w-full">


            
                <Link href="/">
                    <div className="hidden justify-center w-100px md:scale-125 md:w-[180px] xl:scale-150 xl:w-[240px] md:flex">
                    {!!isAdmin ? 
                        <h1 className="text-md font-medium flex gap-1 justify-center items-center">
                            <Zap className="text-accent"/>
                            <div className="flex flex-col gap-0">
                                <span className="text-xs h-[10px] text-accent">made by </span>
                                Georgiy
                            </div>
                        </h1>
                        :            
                        <Logo />
                    }
                    </div>
                </Link>

            {isCatalogPage && (
                
                    <div className="ml-10 hidden md:block">
                        <SearchCatalog/>
                    </div>
            )}
            
            <div className="justify-center md:hidden flex ml-4">
                <Link href="/">
                    {!!isAdmin ? 
                        <h1 className="text-md font-medium flex flex-col gap-0">
                            <span className="text-xs h-[8px] text-accent">made by </span>
                            Georgiy
                        </h1>
                        :            
                        <Logo />
                    }
                </Link>
            </div>

            <div className="hidden ml-auto gap-3 justify-center items-center md:flex">
                <AccountButtons/>
                <NavbarRoutes>
                    {children}
                </NavbarRoutes>
            </div>
            <div className="ml-auto md:hidden flex justify-center items-center gap-4">
                <AccountButtons/>
                <MobileSidebar>
                    {children}
                </MobileSidebar>
            </div>
        </div>
     );
}
 
export default Navbar;