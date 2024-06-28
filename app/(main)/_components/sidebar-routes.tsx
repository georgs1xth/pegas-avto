import { Handshake, Info, Layout, LogOut, ShoppingBag, Wrench } from "lucide-react";
import SidebarItem from "./sidebar-item";
import { usePathname } from "next/navigation";

const mainPageRoutes = [
    {
        icon: Layout,
        label: "Главная",
        href: "/"
    },
    {
        icon: ShoppingBag,
        label: "Товары",
        href: "/catalog"
    },
    {
        icon: Wrench,
        label: "Услуги",
        href: "/services"
    },
    {
        icon: Info,
        label: "О нас",
        href: "/about"
    },
    {
        icon: Handshake,
        label: "Сотрудничество",
        href: "/partnership"
    }
]

const adminPageRoutes = [
    {
        icon: LogOut,
        label: "Выйти",
        href: "/"
    },
    {
        icon: Layout,
        label: "Главная",
        href: "/admin/main"
    },
    {
        icon: ShoppingBag,
        label: "Товары",
        href: "/admin/catalog"
    },
    {
        icon: Wrench,
        label: "Услуги",
        href: "/admin/services"
    }
]

const SidebarRoutes = () => {
    
    const pathname = usePathname();

    const isAdminPage = pathname?.includes("/admin");

    const routes = isAdminPage ? adminPageRoutes : mainPageRoutes;



    return (         
        <div className="flex flex-col w-full gap-y-1.5">
            {routes.map((route) => (
                <SidebarItem 
                    key={route.href}
                    icon={route.icon}
                    label={route.label}
                    href={route.href}
                />
            ))}
        </div>
     );
}
 
export default SidebarRoutes;