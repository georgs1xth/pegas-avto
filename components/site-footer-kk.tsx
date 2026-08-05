import Link from "next/link";

// Футер в стиле Kristall-Auto — единый со статичными SEO-страницами.
// Тёмный в обеих темах. NAP синхронизирован со статикой (generator/build.py).

const POINTS = [
    {
        addr: "Атырау, Құрманғазы көш., 70Б, «Диас» сауда үйі",
        landmark: "«Москва» дүкенінің артқы ауласы, «Тума» базарының жанында",
        hours: "Күн сайын 09:00–19:00, кешке — алдын ала қоңырау бойынша",
        gis: "https://2gis.kz/atyrau/geo/70000001035317367",
    },
    {
        addr: "Атырау, Бекен Айтжанов көш., 35",
        landmark: "«Өркен» моншасы мен Балықшы көпірінің жанында",
        hours: "Күн сайын 10:00–20:00",
        gis: "https://2gis.kz/atyrau/geo/70000001115435394",
    },
];

const APP_LINKS = [
    { href: "/kk", label: "Басты бет" },
    { href: "/kk/services", label: "Қызметтер" },
    { href: "/kk/about", label: "Біз туралы" },
    { href: "/kk/partnership", label: "Ынтымақтастық" },
];

// Статичные SEO-страницы (вне Next-роутера) — обычные <a>
const SEO_LINKS = [
    { href: "/kk/ustanovka-signalizacii-atyrau", label: "Сигнализация орнату" },
    { href: "/kk/avtozapusk-atyrau", label: "Автоқосу" },
    { href: "/kk/avtorskaya-ustanovka", label: "Авторлық орнату" },
    { href: "/kk/videoregistratory-neoline", label: "Neoline бейнетіркегіштері" },
    { href: "/kk/android-magnitoly", label: "Android магнитолалар" },
    { href: "/kk/mastera", label: "Шеберлер" },
    { href: "/kk/ceny", label: "Бағалар" },
    { href: "/kk/opt", label: "Көтерме" },
    { href: "/kk/kontakty", label: "Байланыс" },
];

const SiteFooterKk = () => {
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
                        «Пегас Авто А» — Атырау қаласы мен Атырау облысындағы StarLine ресми дистрибьюторы. Қазақстандағы ресми дистрибьютор{" "}
                        <a
                            href="https://kristall-auto.kz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#ff4d5e]"
                        >
                            Kristall-Auto
                        </a>
                        {" "}құрамында жұмыс істейміз әрі{" "}
                        <a
                            href="https://starline-shop.kz/ru/set-points"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white hover:text-[#ff4d5e]"
                        >
                            StarLine орнату орталықтарының тізіміне
                        </a>
                        енгізілгенбіз. Нарықта 15 жыл, 10 000-нан астам орнату.
                    </p>
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        <div>
                            <h3 className="text-white uppercase text-xs tracking-wider font-bold mb-3">
                                Атыраудағы мекенжайларымыз
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
                                Байланыс
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
                                    WhatsApp-қа жазу
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
                            <p>«JASavto» ЖК</p>
                        </div>
                        <div>
                            <h3 className="text-white uppercase text-xs tracking-wider font-bold mb-3">
                                Бөлімдер
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

export default SiteFooterKk;
