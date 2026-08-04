import { Menu, X } from "lucide-react";

import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

import Sidebar from "./sidebar";

const MobileSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger className="md:hidden hover:opacity-75 transition">
                <Menu />
            </SheetTrigger>
            <SheetContent side="right" className="p-0 gap-2 flex flex-col border-none bg-background rounded-none">
                <div className="h-[60px] flex justify-end items-center px-3 border-b">
                    <SheetClose>
                        <div className="p-2 hover:bg-[#e30016] hover:text-white transition-colors">
                            <X className="w-6 h-6" />
                        </div>
                    </SheetClose>
                </div>
                <Sidebar />
                <div className="mt-auto p-4">
                    <a
                        href="https://wa.me/77023923222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-center bg-[#e30016] hover:bg-[#b80012] text-white font-bold px-4 py-3 transition-colors"
                    >
                        Написать нам
                    </a>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileSidebar;
