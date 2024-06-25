"use client";

import SidebarRoutes from "./sidebar-routes";

const Sidebar = () => {
    return ( 
        <div className="h-full w-full border-r flex flex-col overflow-y-auto bg-white shadow-sm md:rounded-none rounded-b-2xl">
            <div className="flex flex-col w-full py-2">
                <SidebarRoutes />
            </div>
        </div>
     );
}
 
export default Sidebar;