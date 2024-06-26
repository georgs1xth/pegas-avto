"use client";

import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";
import { SearchInput } from "@/components/search-input";
import { usePathname } from "next/navigation";

const Navbar = () => {

    const pathname = usePathname();

    const isCatalogPage = pathname.includes("/catalog");

    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm w-full">

            <div className="hidden justify-center w-100px md:scale-125 md:w-[180px] xl:scale-150 xl:w-[240px] md:flex">
                <Logo />
            </div>
            {isCatalogPage && (
                <div className="ml-10 hidden md:block">
                    <SearchInput/>
                </div>
            )}
            <MobileSidebar/>
            
            <div className="justify-center md:hidden flex ml-4">
                <Logo />
            </div>

            <div className="ml-auto">
                <NavbarRoutes/>
            </div>
            
        </div>
     );
}
 
export default Navbar;