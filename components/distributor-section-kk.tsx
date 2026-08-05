import { Boxes, PackageCheck, Store, Wrench } from "lucide-react";

// Басты беттегі «біз кімбіз» блогы. Мақсаты — «Пегас Авто А» дегеннің
// Атыраудағы StarLine ресми дистрибьюторы екенін бір мағыналы етіп айту.

const POINTS = [
    {
        icon: PackageCheck,
        title: "Өндірушіден тікелей түпнұсқа",
        text: "StarLine жабдығы делдалсыз, ресми арна арқылы келеді. Әр кешеннің сериялық нөмірі мен өндіруші кепілдігі бар: 3 жыл, my.starline.ru сайтында тіркелгенде 5 жылға дейін.",
    },
    {
        icon: Boxes,
        title: "Атыраудағы өз қоймамыз",
        text: "Қоймада бар позицияларды өтініш түскен күні тиеп жібереміз — Алматыдан жеткізуді күтудің қажеті жоқ. Ең аз партия жоқ: бір позициядан бастап жұмыс істейміз.",
    },
    {
        icon: Store,
        title: "Көтерме және бөлшек сауда",
        text: "Көтермелеп жеке орнатушыларға, автосервистер мен СТО-ларға, автосалондарға, автотауар дүкендеріне және автопарктерге жеткіземіз. Бөлшектеп жеке иелерге сатамыз — орнатумен де, орнатусыз да.",
    },
    {
        icon: Wrench,
        title: "Өзіміз сатамыз, өзіміз орнатамыз",
        text: "Біз сонымен қатар StarLine авторизацияланған орнату орталығымыз: сатқанымызды Атыраудағы екі бөлімшемізде өзіміз орнатамыз. Жабдық үшін де, жұмыс үшін де бір компания жауап береді.",
    },
];

const FAQ = [
    {
        q: "«Пегас Авто А» — дистрибьютор ма, орнату орталығы ма?",
        a: "Екеуі де. «Пегас Авто А» — Атырау қаласы мен Атырау облысындағы StarLine ресми дистрибьюторы: түпнұсқа жабдықты өз қоймамыздан көтерме және бөлшектеп сатамыз. Сонымен қатар біз StarLine авторизацияланған орнату орталығымыз және жабдықты Атыраудағы екі бөлімшемізде өзіміз орнатамыз.",
    },
    {
        q: "«Пегас Авто А» мен Kristall-Auto қалай байланысты?",
        a: "«Пегас Авто А» Қазақстандағы StarLine ресми дистрибьюторы Kristall-Auto құрамында жұмыс істейді. Жеткізілім өндірушінің ресми арнасымен жүреді, ал Атырау мен Атырау облысындағы дистрибуциямен біз айналысамыз.",
    },
    {
        q: "Көтерме жабдықты кімге жеткізесіздер?",
        a: "Ең алдымен жеке орнатушыларға — бұл негізгі бағытымыз, сондай-ақ автосервистер мен СТО-ларға, автосалондар мен дилерлік орталықтарға, автотауар дүкендеріне, автопарктер мен көлік компанияларына. Ең аз партия жоқ.",
    },
    {
        q: "Кәдімгі StarLine орнатушысынан айырмашылығыңыз неде?",
        a: "Кәдімгі орнатушы жабдықты дистрибьютордан сатып алады. Ал біз — сол дистрибьютордың өзіміз: жабдық Атыраудағы қоймамызда тұр, бағада делдалдың үстемесі жоқ, кепілдік мәселесінде делдалдар тізбегінен жауап күтудің қажеті жоқ.",
    },
];

const DistributorSectionKk = () => {
    return (
        <section className="py-2">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                «StarLine ресми дистрибьюторы» дегеніміз біздің жағдайда не
            </h2>
            <div className="h-1 w-12 bg-[#e30016] mt-3 mb-5" />

            <p className="max-w-[76ch] text-neutral-600 dark:text-neutral-300 mb-6">
                «Пегас Авто А» — Атырау қаласы мен Атырау облысындағы StarLine ресми дистрибьюторы.
                Бұл дегеніміз: түпнұсқа StarLine күзет жабдығы бізге ресми арна арқылы тікелей
                келеді, Атыраудағы қоймамызда сақталады және көтерме әрі бөлшектеп сатылады.
                Орнатуды өзіміз орындаймыз — StarLine авторизацияланған орнату орталығы ретінде.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
                {POINTS.map((p) => {
                    const Icon = p.icon;
                    return (
                        <div
                            key={p.title}
                            className="border border-neutral-200 dark:border-neutral-800 border-t-[3px] border-t-[#e30016] p-4"
                        >
                            <div className="flex items-center gap-2 mb-2">
                                <Icon className="h-5 w-5 text-[#e30016] shrink-0" />
                                <h3 className="font-bold">{p.title}</h3>
                            </div>
                            <p className="text-sm text-neutral-600 dark:text-neutral-400">{p.text}</p>
                        </div>
                    );
                })}
            </div>

            <div className="mt-4 flex flex-wrap gap-3">
                <a
                    href="/kk/opt/"
                    className="inline-flex items-center gap-2 bg-[#e30016] hover:bg-[#b80012] text-white px-5 py-2.5 font-bold transition-colors"
                >
                    Көтерме жеткізу
                </a>
                <a
                    href="/kk/starline-atyrau/"
                    className="inline-flex items-center gap-2 border-2 border-neutral-900 dark:border-neutral-200 hover:border-[#e30016] hover:text-[#e30016] px-5 py-2.5 font-bold transition-colors"
                >
                    Атырауда StarLine
                </a>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Жиі қойылатын сұрақтар
            </h2>
            <div className="h-1 w-12 bg-[#e30016] mt-3 mb-5" />
            <div className="flex flex-col gap-2">
                {FAQ.map((f) => (
                    <details
                        key={f.q}
                        className="border border-neutral-200 dark:border-neutral-800 group"
                    >
                        <summary className="cursor-pointer list-none px-4 py-3 font-bold flex justify-between gap-3 group-open:text-[#e30016]">
                            {f.q}
                            <span className="text-[#e30016] font-extrabold shrink-0">+</span>
                        </summary>
                        <div className="px-4 pb-3 text-neutral-600 dark:text-neutral-400">
                            {f.a}
                        </div>
                    </details>
                ))}
            </div>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "FAQPage",
                        mainEntity: FAQ.map((f) => ({
                            "@type": "Question",
                            name: f.q,
                            acceptedAnswer: { "@type": "Answer", text: f.a },
                        })),
                    }),
                }}
            />
        </section>
    );
};

export default DistributorSectionKk;
