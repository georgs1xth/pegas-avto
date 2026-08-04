"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Горизонтальная навигация в шапке — стиль статичных SEO-страниц.
// Статичные разделы (услуги, SEO-страницы) — обычные <a>, они вне Next-роутера.

const routes = [
    { href: "/services", label: "Услуги", app: false },
    { href: "/ustanovka-signalizacii-atyrau", label: "Сигнализации", app: false },
    { href: "/avtozapusk-atyrau", label: "Автозапуск", app: false },
    { href: "/ceny", label: "Цены", app: false },
    { href: "/kontakty", label: "Контакты", app: false },
];

const TopNav = () => {
    const pathname = usePathname();

    const cls = (href: string) =>
        cn(
            "relative px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-[#e30016]",
            "after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[3px] after:bg-[#e30016] after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100",
            href === "/" && pathname === "/" && "text-foreground after:scale-x-100"
        );

    return (
        <nav className="flex items-center gap-1">
            {routes.map((route) =>
                route.app ? (
                    <Link key={route.href} href={route.href} className={cls(route.href)}>
                        {route.label}
                    </Link>
                ) : (
                    <a key={route.href} href={route.href} className={cls(route.href)}>
                        {route.label}
                    </a>
                )
            )}
        </nav>
    );
};

export default TopNav;
