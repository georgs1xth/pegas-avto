import { Camera, MonitorSmartphone, ShieldCheck } from "lucide-react";

// Басты беттегі «тағы не сатамыз» блогы: «Пегас Авто А» тек сигнализациямен
// шектелмейтінін көрсетеді.

const GROUPS = [
    {
        icon: ShieldCheck,
        title: "StarLine күзет кешендері",
        text: "A91-ден 6-буынға дейінгі бүкіл желі: автоқосуы бар сигнализациялар, меткалар, маяктар мен GPS-трекерлер, CAN/LIN модульдер, брелоктар мен аксессуарлар. Атыраудағы қоймадан көтерме және бөлшек.",
        links: [
            { href: "/kk/starline-atyrau/", label: "Атырауда StarLine" },
            { href: "/kk/opt/", label: "Көтерме жеткізу" },
        ],
    },
    {
        icon: Camera,
        title: "Бейнетіркегіштер",
        text: "Біз — Атыраудағы Neoline ресми дистрибьюторы: радар-детекторы бар гибридтер және 26 490 ₸-ден бастап 4K флагмандарға дейінгі тіркеуіштер, сондай-ақ Artway мен Kristall-Auto. Автосалондарға, сервистерге және дүкендерге көтерме.",
        links: [
            { href: "/kk/videoregistratory-neoline/", label: "Neoline каталогы және хиттер" },
            { href: "/kk/opt/", label: "Автосалондарға көтерме" },
        ],
    },
    {
        icon: MonitorSmartphone,
        title: "Android магнитолалар",
        text: "Dudu және Mards: бас құрылғыны нақты көлікке қарай таңдаймыз, рульдегі батырмаларды, зауыттық камералар мен парктрониктерді сақтаймыз. Орнатуды өзіміз жасаймыз.",
        links: [{ href: "/kk/android-magnitoly/", label: "Магнитола және орнату туралы" }],
    },
];

const EXTRA =
    "Қосымша парктрониктер, артқы көрініс камералары мен GPS-мониторинг орнатамыз, " +
    "ал автоэлектрика мен диагностика бойынша Injector Service-пен бірлесіп жұмыс істейміз.";

const AlsoSellSectionKk = () => {
    return (
        <section className="py-2">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Тағы нені сатамыз және орнатамыз
            </h2>
            <div className="h-1 w-12 bg-[#e30016] mt-3 mb-5" />

            <p className="max-w-[76ch] text-neutral-600 dark:text-neutral-300 mb-6">
                «Пегас Авто А» — Атыраудағы StarLine және Neoline ресми дистрибьюторы. Күзет
                кешендерінен бөлек бейнетіркегіштер мен Android магнитолаларын жеткіземіз әрі
                орнатамыз. Бәрі қаладағы өз қоймамыздан — автосалондарға, сервистерге және
                дүкендерге көтермелеп, жеке иелерге бөлшектеп.
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

export default AlsoSellSectionKk;
