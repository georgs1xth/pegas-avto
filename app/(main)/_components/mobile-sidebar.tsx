import { Menu } from "lucide-react";

import { Sheet,
         SheetContent,
         SheetTrigger
 } from "@/components/ui/sheet";

 import Sidebar from "./sidebar";
import MobileNavbar from "./mobile-navbar";
import { ReactNode } from "react";

const MobileSidebar = ({
    children
}: {
    children: React.ReactNode
}) => {
    return ( 
        <Sheet>
            <SheetTrigger className="md:hidden hover:opacity-75 transition">
                <Menu/>
            </SheetTrigger>
            <SheetContent side="right" className="p-0 gap-2 flex flex-col border-none bg-slate-200/70 rounded-s-xl">
                <MobileNavbar>
                    {children}
                </MobileNavbar>
                <Sidebar/>
            </SheetContent>
        </Sheet>
    );
}
 
export default MobileSidebar;