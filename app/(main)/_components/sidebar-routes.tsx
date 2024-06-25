import { Handshake, Info, Layout, ShoppingBag, Wrench } from "lucide-react";
import SidebarItem from "./sidebar-item";

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

const SidebarRoutes = () => {

    const routes = mainPageRoutes;

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