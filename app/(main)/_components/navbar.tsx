"use client";

import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { SearchCatalog } from "@/components/search-input";
import { usePathname } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

const Navbar = () => {

    const pathname = usePathname();

    const isCatalogPage = pathname.includes("/catalog");

    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm w-full">

            <Link href="/">
                <div className="hidden justify-center w-100px md:scale-125 md:w-[180px] xl:scale-150 xl:w-[240px] md:flex">
                    <Logo />
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
            <Link href="/">
                <div className="justify-center md:hidden flex ml-4">
                    <Logo />
                </div>
            </Link>

            <div className="flex ml-auto gap-3">
                <div className="flex justify-center items-center px-4 py-2 border rounded-md shadow-sm hover:bg-slate-200 transition text-slate-700">
                    <SignedOut>
                        <SignInButton/>
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <NavbarRoutes/>
            </div>
            
        </div>
     );
}
 
export default Navbar;