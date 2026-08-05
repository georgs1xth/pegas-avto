import { Boxes, Building2 } from "lucide-react";

// Блок для оптовых партнёров на главной. Дублирует смысл /opt и /partnership.
const WholesaleSectionKk = () => {
    const items = [
        {
            icon: Boxes,
            title: "Орнатушылар мен автосервистерге",
            text: "Атыраудағы қоймадан түпнұсқа StarLine: өтініш түскен күні тиеу, ең аз партия жоқ. Жабдықты көтерме жеткізуге ҚҚС-пен құжаттар мүмкін — Kristall-Auto арқылы.",
            href: "/kk/opt",
            link: "Көтерме жеткізу туралы →",
        },
        {
            icon: Building2,
            title: "Ұйымдар мен автопарктерге",
            text: "Автопарктерді жабдықтау, GPS-мониторинг, коммерциялық көлікке бейнебақылау. Бухгалтерияға толық құжат пакеті. Жұмыстар «JASavto» ЖК арқылы, ҚҚС-сыз рәсімделеді.",
            href: "/kk/partnership",
            link: "Ынтымақтастық →",
        },
    ];

    return (
        <section className="py-2">
            <h2 className="text-2xl font-extrabold tracking-tight mb-1">
                Көтерме серіктестерге
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

export default WholesaleSectionKk;
