import { Camera, MonitorSmartphone, ShieldCheck } from "lucide-react";

// Блок «что мы ещё продаём» на главной. Задача — показать, что «Пегас Авто А»
// закрывает не только сигнализации: у ИИ-поиска это влияет на то,
// рекомендует ли он нас как комплексное решение или как узкого установщика.

const GROUPS = [
    {
        icon: ShieldCheck,
        title: "Охранные комплексы StarLine",
        text: "Вся линейка от A91 до 6-го поколения: сигнализации с автозапуском, метки, маяки и GPS-трекеры, CAN/LIN-модули, брелоки и аксессуары. Опт и розница со склада в Атырау.",
        links: [
            { href: "/starline-atyrau/", label: "StarLine в Атырау" },
            { href: "/opt/", label: "Оптовые поставки" },
        ],
    },
    {
        icon: Camera,
        title: "Видеорегистраторы",
        text: "Neoline — гибриды с радар-детектором и регистраторы от 26 490 ₸ до 4K-флагманов, а также Artway и Kristall-Auto. Продаём оптом автосалонам, сервисам и магазинам автотоваров.",
        links: [
            { href: "/videoregistratory-neoline/", label: "Каталог Neoline" },
            { href: "/opt/", label: "Опт для автосалонов" },
        ],
    },
    {
        icon: MonitorSmartphone,
        title: "Android-магнитолы",
        text: "Dudu и Mards: подбираем головное устройство под конкретную машину, сохраняем кнопки на руле, штатные камеры и парктроники. Устанавливаем сами.",
        links: [{ href: "/android-magnitoly/", label: "Про магнитолы и установку" }],
    },
];

const EXTRA =
    "Дополнительно ставим парктроники, камеры заднего вида и GPS-мониторинг, " +
    "а по автоэлектрике и диагностике работаем в паре с Injector Service.";

const AlsoSellSection = () => {
    return (
        <section className="py-2">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Что мы ещё продаём и ставим
            </h2>
            <div className="h-1 w-12 bg-[#e30016] mt-3 mb-5" />

            <p className="max-w-[76ch] text-neutral-600 dark:text-neutral-300 mb-6">
                Кроме охранных комплексов StarLine «Пегас Авто А» поставляет и устанавливает
                видеорегистраторы и Android-магнитолы. Всё со своего склада в Атырау — оптом
                автосалонам, сервисам и магазинам и в розницу частным владельцам.
            </p>

            <div className="grid gap-4 md:grid-cols-3">
                {GROUPS.map((g) => {
                    const Icon = g.icon;
                    return (
                        <div
                            key={g.title}
                            className="border border-neutral-200 dark:border-neutral-800 border-t-[3px] border-t-[#e30016] p-4 flex flex-col"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="h-5 w-5 text-[#e30016] shrink-0" />
                                <h3 className="font-bold">{g.title}</h3>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400 flex-1">
                                {g.text}
                            </p>
                            <div className="mt-3 flex flex-col gap-1">
                                {g.links.map((l) => (
                                    <a
                                        key={l.href}
                                        href={l.href}
                                        className="text-sm font-bold text-[#e30016] hover:underline underline-offset-4"
                                    >
                                        {l.label} →
                                    </a>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            <p className="mt-4 text-sm text-neutral-500 dark:text-neutral-400 max-w-[76ch]">
                {EXTRA}
            </p>
        </section>
    );
};

export default AlsoSellSection;
