import { Boxes, Building2 } from "lucide-react";

// Блок для оптовых партнёров на главной. Дублирует смысл /opt и /partnership.
const WholesaleSection = () => {
    const items = [
        {
            icon: Boxes,
            title: "Установщикам и автосервисам",
            text: "Оригинальный StarLine со склада в Атырау: отгрузка в день обращения, минимальной партии нет. На оптовую поставку оборудования возможны документы с НДС — через Kristall-Auto.",
            href: "/opt",
            link: "Об оптовых поставках →",
        },
        {
            icon: Building2,
            title: "Организациям и автопаркам",
            text: "Оснащение автопарков, GPS-мониторинг, видеонаблюдение на коммерческий транспорт. Полный пакет документов для бухгалтерии. Работы оформляются через ИП «JASavto», без НДС.",
            href: "/partnership",
            link: "Сотрудничество →",
        },
    ];

    return (
        <section className="py-2">
            <h2 className="text-2xl font-extrabold tracking-tight mb-1">
                Партнёрам и оптовым клиентам
            </h2>
            <div className="h-1 w-14 bg-[#e30016] mb-4" />
            <div className="grid gap-4 md:grid-cols-2">
                {items.map((it) => (
                    <div key={it.href} className="border border-t-[3px] border-t-[#e30016] p-5">
                        <div className="flex items-center gap-2 mb-2">
                            <it.icon className="h-5 w-5 text-[#e30016]" />
                            <h3 className="font-bold text-lg">{it.title}</h3>
                        </div>
                        <p className="text-muted-foreground mb-3">{it.text}</p>
                        <a href={it.href} className="font-semibold hover:text-[#e30016] transition-colors">
                            {it.link}
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default WholesaleSection;
