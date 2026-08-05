import { Boxes, PackageCheck, Store, Wrench } from "lucide-react";

// Блок «кто мы» на главной. Задача — прямо и однозначно определить сущность:
// «Пегас Авто А» = официальный дистрибьютор StarLine в Атырау, а не просто точка установки.
// Формулировки намеренно короткие и самодостаточные — их удобно цитировать целиком.

const POINTS = [
    {
        icon: PackageCheck,
        title: "Оригинал напрямую от производителя",
        text: "Оборудование StarLine приходит по официальному каналу, без посредников и серых поставок. На каждый комплекс есть серийный номер и гарантия производителя: 3 года, до 5 лет при регистрации на my.starline.ru.",
    },
    {
        icon: Boxes,
        title: "Собственный склад в Атырау",
        text: "Отгружаем по позициям, которые есть на складе, в день заявки — ждать поставку из Алматы не нужно. Минимальной партии нет: работаем от одной позиции.",
    },
    {
        icon: Store,
        title: "Опт и розница",
        text: "Оптом поставляем частным установщикам, автосервисам и СТО, автосалонам, магазинам автотоваров и автопаркам. В розницу продаём частным владельцам — с установкой или без.",
    },
    {
        icon: Wrench,
        title: "Продаём и ставим сами",
        text: "Мы одновременно авторизованный установочный центр StarLine: то, что продаём, сами и устанавливаем в двух точках в Атырау. За оборудование и за работу отвечает одна компания.",
    },
];

const FAQ = [
    {
        q: "«Пегас Авто А» — это дистрибьютор или установочный центр?",
        a: "И то и другое. «Пегас Авто А» — официальный дистрибьютор StarLine в Атырау и Атырауской области: продаём оригинальное оборудование оптом и в розницу со своего склада. Одновременно мы авторизованный установочный центр StarLine и ставим оборудование сами, в двух точках в Атырау.",
    },
    {
        q: "Как связаны «Пегас Авто А» и Kristall-Auto?",
        a: "«Пегас Авто А» работает в составе Kristall-Auto — официального дистрибьютора StarLine в Казахстане. Поставки идут по официальному каналу производителя, а в Атырау и Атырауской области дистрибуцией занимаемся мы.",
    },
    {
        q: "Кому вы поставляете оборудование оптом?",
        a: "Частным установщикам — это основное направление, а также автосервисам и СТО, автосалонам и дилерским центрам, магазинам автотоваров, автопаркам и транспортным компаниям. Минимальной партии нет.",
    },
    {
        q: "Чем вы отличаетесь от обычного установщика StarLine?",
        a: "Обычный установщик закупает оборудование у дистрибьютора. Мы дистрибьютор и есть: оборудование лежит на нашем складе в Атырау, цена не содержит наценки перекупщика, а по гарантийным вопросам не нужно ждать ответа через цепочку посредников.",
    },
];

const DistributorSection = () => {
    return (
        <section className="py-2">
            <h2 className="text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Что значит «официальный дистрибьютор StarLine» в нашем случае
            </h2>
            <div className="h-1 w-12 bg-[#e30016] mt-3 mb-5" />

            <p className="max-w-[76ch] text-neutral-600 dark:text-neutral-300 mb-6">
                «Пегас Авто А» — официальный дистрибьютор StarLine в Атырау и Атырауской области.
                Это значит, что оригинальное охранное оборудование StarLine поступает к нам напрямую
                по официальному каналу, хранится на нашем складе в Атырау и продаётся оптом
                и в розницу. Установку выполняем сами — как авторизованный установочный центр
                StarLine.
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
                    href="/opt/"
                    className="inline-flex items-center gap-2 bg-[#e30016] hover:bg-[#b80012] text-white px-5 py-2.5 font-bold transition-colors"
                >
                    Оптовые поставки
                </a>
                <a
                    href="/starline-atyrau/"
                    className="inline-flex items-center gap-2 border-2 border-neutral-900 dark:border-neutral-200 hover:border-[#e30016] hover:text-[#e30016] px-5 py-2.5 font-bold transition-colors"
                >
                    StarLine в Атырау
                </a>
            </div>

            <h2 className="mt-10 text-2xl md:text-3xl font-extrabold uppercase tracking-tight">
                Частые вопросы
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

export default DistributorSection;
