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

const Navbar = ({
    children
}: {
    children: React.ReactNode
}) => {

    const pathname = usePathname();

    const isCatalogPage = pathname.includes("/catalog");

    return ( 
        <div className="p-4 border-b h-full flex items-center bg-background/60 backdrop-blur-md shadow-sm w-full">


            
                <Link href="/">
                    <div className="hidden justify-center w-100px md:scale-125 md:w-[180px] xl:scale-150 xl:w-[240px] md:flex">
                    {!!children ? 
                        <h1 className="text-md font-medium flex gap-1 justify-center items-center">
                            <Zap className="text-slate-800"/>
                            <div className="flex flex-col gap-0">
                                <span className="text-xs h-[10px] text-slate-700">made by </span>
                                Georgiy
                            </div>
                        </h1>
                        :            
                        <Logo />
                    }
                    </div>
                </Link>

            {isCatalogPage && (
                <Suspense>
                    <div className="ml-10 hidden md:block">
                        <SearchCatalog/>
                    </div>
                </Suspense>
            )}
            <MobileSidebar/>

            <div className="justify-center md:hidden flex ml-4">
                <Link href="/">
                    {!!children ? 
                        <h1 className="text-md font-medium flex flex-col gap-0">
                            <span className="text-xs h-[8px] text-slate-700">made by </span>
                            Georgiy
                        </h1>
                        :            
                        <Logo />
                    }
                </Link>
            </div>

            <div className="flex ml-auto gap-3 justify-center items-center">
                <div className="flex justify-center items-center border rounded-md shadow-sm overflow-hidden hover:bg-slate-200 transition text-slate-700">
                    <SignedOut>
                        <SignInButton>
                            <div className="px-4 py-2 hover:cursor-pointer bg-background/40">
                                <LogIn className=""/>
                            </div>
                        </SignInButton>
                    </SignedOut>
                    <SignedIn>
                        <div className="px-4 py-2 flex justify-center items-center w-12 h-10 bg-background/40">
                            <UserButton />
                        </div>
                    </SignedIn>
                </div>
                <NavbarRoutes>
                    {children}
                </NavbarRoutes>
            </div>
            
        </div>
     );
}
 
export default Navbar;