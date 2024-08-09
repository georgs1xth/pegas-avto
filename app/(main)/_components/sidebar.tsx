"use client";

import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
    return ( 
        <div className="h-full w-full flex flex-col overflow-y-auto md:bg-background shadow-sm relative z-1">
            <div className="flex flex-col w-full pb-2 gap-2 md:py-2">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;