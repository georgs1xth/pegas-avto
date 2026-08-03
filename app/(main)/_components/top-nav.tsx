"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

// Горизонтальная навигация в шапке — стиль статичных SEO-страниц:
// полужирные ссылки, серые → красные, активная с красной чертой снизу.

const publicRoutes = [
    { href: "/", label: "Главная" },
    { href: "/catalog", label: "Товары" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/partnership", label: "Сотрудничество" },
];

const adminRoutes = [
    { href: "/admin/main", label: "Главная" },
    { href: "/admin/catalog", label: "Товары" },
    { href: "/admin/services", label: "Услуги" },
    { href: "/employee/schedule", label: "Запись" },
];

const TopNav = () => {
    const pathname = usePathname();

    const isAdminArea =
        pathname?.startsWith("/admin") || pathname?.startsWith("/employee");

    const routes = isAdminArea ? adminRoutes : publicRoutes;

    const isActive = (href: string) =>
        href === "/" ? pathname === "/" : pathname?.startsWith(href);

    return (
        <nav className="flex items-center gap-1">
            {routes.map((route) => (
                <Link
                    key={route.href}
                    href={route.href}
                    className={cn(
                        "relative px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-[#e30016]",
                        "after:absolute after:left-3 after:right-3 after:-bottom-[2px] after:h-[3px] after:bg-[#e30016] after:scale-x-0 after:transition-transform after:origin-left hover:after:scale-x-100",
                        isActive(route.href) &&
                            "text-foreground after:scale-x-100"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </nav>
    );
};

export default TopNav;
