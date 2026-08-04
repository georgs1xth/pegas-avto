"use client";

import { Handshake, Info, Layout, ShieldCheck, Wrench } from "lucide-react";
import SidebarItem from "./sidebar-item";

const mainPageRoutes = [
    {
        icon: Layout,
        label: "Главная",
        href: "/"
    },
    {
        icon: Wrench,
        label: "Услуги",
        href: "/services/"
    },
    {
        icon: ShieldCheck,
        label: "Установка сигнализаций",
        href: "/ustanovka-signalizacii-atyrau/"
    },
    {
        icon: Info,
        label: "О нас",
        href: "/about/"
    },
    {
        icon: Handshake,
        label: "Сотрудничество",
        href: "/partnership/"
    }
]

const SidebarRoutes = () => {
    return (
        <div className="flex flex-col w-full gap-y-1.5">
            {mainPageRoutes.map((route) => (
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
