import Link from "next/link";

// Футер в стиле Kristall-Auto — единый со статичными SEO-страницами.
// Тёмный в обеих темах. NAP синхронизирован со статикой (generator/build.py).

const POINTS = [
    {
        addr: "Атырау, ул. Курмангазы, 70Б, ТД «Диас»",
        landmark: "задний двор магазина «Москва», рядом с мал базаром «Тума»",
        hours: "Ежедневно 09:00–19:00, вечером — по предварительному звонку",
        gis: "https://2gis.kz/atyrau/geo/70000001035317367",
    },
    {
        addr: "Атырау, ул. Бекена Айтжанова, 35",
        landmark: "рядом с баней «Оркен» и балыкшинским мостом",
        hours: "Ежедневно 10:00–20:00",
        gis: "https://2gis.kz/atyrau/geo/70000001115435394",
    },
];

const APP_LINKS = [
    { href: "/", label: "Главная" },
    { href: "/catalog", label: "Товары" },
    { href: "/services", label: "Услуги" },
    { href: "/about", label: "О нас" },
    { href: "/partnership", label: "Сотрудничество" },
];

// Статичные SEO-страницы (вне Next-роутера) — обычные <a>
const SEO_LINKS = [
    { href: "/ustanovka-signalizacii-atyrau/", label: "Установка сигнализаций" },
    { href: "/avtozapusk-atyrau/", label: "Автозапуск" },
    { href: "/avtorskaya-ustanovka/", label: "Авторская установка" },
    { href: "/ceny/", label: "Цены" },
    { href: "/opt/", label: "Опт" },
    { href: "/kontakty/", label: "Контакты" },
];

const SiteFooter = () => {
    return (
        <footer className="mt-8">
            <div
                className="h-[10px]"
                style={{
                    background:
                        "repeating-linear-gradient(135deg,#101010 0 26px,#e30016 26px 40px)",
                }}
            />
            <div className="bg-[#101010] text-neutral-400 text-sm">
                <div className="max-w-5xl mx-auto px-4 py-8 flex flex-col gap-6">
                    <p>
                        СТО «Пегас Авто А» — филиал{" "}
                        <a
                            href="https://kristall-auto.kz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#ff4d5e]"
                        >
                            Kristall-Auto
                        </a>
                        , официального дистрибьютора StarLine в Казахстане. Мы в{" "}
                        <a
                            href="https://starline-shop.kz/ru/set-points"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#ff4d5e]"
                        >
                            списке установочных центров StarLine
                        </a>
                        . 15 лет на рынке, более 10 000 установок.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h3 className="text-white uppercase text-xs tracking-wider font-bold mb-3">
                                Наши точки в Атырау
                            </h3>
                            {POINTS.map((p) => (
                                <p key={p.addr} className="mb-3">
                                    <span className="text-white font-semibold">{p.addr}</span>
                                    <br />
                                    {p.landmark}
                                    <br />
                                    {p.hours}
                                    <br />
                                    <a
                                        href={p.gis}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-white underline underline-offset-4 hover:text-[#ff4d5e]"
                                    >
                                        2ГИС
                                    </a>
                                </p>
                            ))}
                        </div>
                        <div>
                            <h3 className="text-white uppercase text-xs tracking-wider font-bold mb-3">
                                Контакты
                            </h3>
                            <p className="mb-2">
                                <a href="tel:+77023923222" className="text-white hover:text-[#ff4d5e]">
                                    +7 702 392 32 22
                                </a>{" "}
                                (WhatsApp)
                            </p>
                            <p className="mb-2">
                                <a
                                    href="https://wa.me/77023923222"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-block bg-[#e30016] hover:bg-[#b80012] text-white font-bold px-4 py-2"
                                >
                                    Написать в WhatsApp
                                </a>
                            </p>
                            <p className="mb-2">
                                Instagram:{" "}
                                <a
                                    href="https://www.instagram.com/pegas_avto_by_kristallauto"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-white hover:text-[#ff4d5e]"
                                >
                                    pegas_avto_by_kristallauto
                                </a>
                            </p>
                            <p>ИП «JASavto»</p>
                        </div>
                        <div>
                            <h3 className="text-white uppercase text-xs tracking-wider font-bold mb-3">
                                Разделы
                            </h3>
                            <ul className="space-y-1.5">
                                {APP_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <Link href={l.href} className="text-white hover:text-[#ff4d5e]">
                                            {l.label}
                                        </Link>
                                    </li>
                                ))}
                                {SEO_LINKS.map((l) => (
                                    <li key={l.href}>
                                        <a href={l.href} className="text-white hover:text-[#ff4d5e]">
                                            {l.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <p className="text-xs text-neutral-500">
                        © {new Date().getFullYear()} СТО «Пегас Авто А» by Kristall Auto · Атырау
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default SiteFooter;
