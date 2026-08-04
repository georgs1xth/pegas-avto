"use client";

import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Горизонтальная навигация в шапке — стиль статичных SEO-страниц.
// Разделы статичные (вне Next-роутера), поэтому обычные <a>.

const ROUTES = {
    ru: [
        { href: "/services", label: "Услуги" },
        { href: "/ustanovka-signalizacii-atyrau", label: "Сигнализации" },
        { href: "/avtozapusk-atyrau", label: "Автозапуск" },
        { href: "/ceny", label: "Цены" },
        { href: "/kontakty", label: "Контакты" },
    ],
    kk: [
        { href: "/kk/services", label: "Қызметтер" },
        { href: "/kk/ustanovka-signalizacii-atyrau", label: "Сигнализация" },
        { href: "/kk/avtozapusk-atyrau", label: "Автоқосу" },
        { href: "/kk/ceny", label: "Бағалар" },
        { href: "/kk/kontakty", label: "Байланыс" },
    ],
};

const TopNav = () => {
    const pathname = usePathname();
    const isKk = pathname === "/kk" || pathname.startsWith("/kk/");
    const routes = isKk ? ROUTES.kk : ROUTES.ru;

    return (
        <nav className="flex items-center gap-1">
            {routes.map((route) => (
                <a
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "relative px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-[#e30016]",
                        "after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[3px] after:bg-[#e30016] after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100"
                    )}
                >
                    {route.label}
                </a>
            ))}
        </nav>
    );
};

export default TopNav;
