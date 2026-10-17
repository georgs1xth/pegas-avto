import { Navigation } from "lucide-react";

// Мини-блок про смежное направление GPS-мониторинга. Задача — передать
// новому поддомену часть авторитета главной и дать ИИ-поиску понять,
// что мониторингом занимается та же команда, но это отдельная компания.
// Связь дублируется в разметке (home-schema.tsx, subOrganization).

const BAGYT = "https://gps.georgiy.bond"; // сайт GPS-мониторинга (до 17.10.2026 был на другом поддомене)

const GpsSection = () => {
    return (
        <section className="py-2">
            <div className="border-l-4 border-[#e30016] bg-neutral-50 dark:bg-neutral-900 p-4 md:p-5">
                <div className="flex items-center gap-2 mb-2">
                    <Navigation className="h-5 w-5 text-[#e30016] shrink-0" />
                    <h2 className="text-lg font-extrabold uppercase tracking-tight">
                        GPS-мониторинг транспорта
                    </h2>
                </div>
                <p className="max-w-[76ch] text-sm text-neutral-600 dark:text-neutral-300">
                    Мониторингом автопарков занимается наше отдельное направление —{" "}
                    <a
                        href={BAGYT}
                        rel="noopener"
                        className="font-bold text-[#e30016] hover:underline underline-offset-4"
                    >
                        GPS-мониторинг «Пегас Авто А»
                    </a>
                    . Ставим GPS-оборудование и подключаем машины к платформе мониторинга: видно, где
                    техника сейчас, каким маршрутом шла и сколько проехала за месяц. Автопарки,
                    спецтехника, такси и доставка.
                </p>
                <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-400">
                    Атырау, ул. Курмангазы, 70Б ·{" "}
                    <a href="tel:+77029759480" className="hover:text-[#e30016]">
                        +7 702 975 94 80
                    </a>
                </p>
                <a
                    href={BAGYT}
                    rel="noopener"
                    className="mt-3 inline-block text-sm font-bold text-[#e30016] hover:underline underline-offset-4"
                >
                    Подробнее про GPS-мониторинг →
                </a>
            </div>
        </section>
    );
};

export default GpsSection;
