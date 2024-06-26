import NavbarRoutes from "@/components/navbar-routes";
import { Logo } from "./logo";
import MobileSidebar from "./mobile-sidebar";

const Navbar = () => {
    return ( 
        <div className="p-4 border-b h-full flex items-center bg-white shadow-sm w-full">

            <div className="hidden py-28 justify-center w-100px md:scale-125 md:w-[180px] xl:scale-150 xl:w-[240px] md:flex">
                <Logo />
            </div>

            <MobileSidebar/>
            
            <div className="py-28 justify-center md:hidden flex ml-4">
                <Logo />
            </div>

            <div className="ml-auto">
                <NavbarRoutes/>
            </div>
            
        </div>
     );
}
 
export default Navbar;