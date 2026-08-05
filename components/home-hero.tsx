import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

// Hero в стиле Kristall-Auto: чёрный фон, красная скошенная плашка, крупный uppercase-заголовок.
const HomeHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#101010] text-white">
            {/* красный скошенный блок справа */}
            <div
                aria-hidden
                className="absolute inset-y-0 right-[-90px] w-[45%] bg-[#e30016] opacity-95"
                style={{ transform: "skew(-18deg)" }}
            />
            <div
                aria-hidden
                className="absolute inset-y-0 right-[26%] w-[10px] bg-white/10"
                style={{ transform: "skew(-18deg)" }}
            />


            <div className="relative mx-auto max-w-[1140px] px-4 py-12 md:py-16 lg:pr-[38%]">
                <p className="text-[#ff4d5e] font-bold tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
                    Атырау · официальный дистрибьютор StarLine · 15 лет
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-[1.1] tracking-tight max-w-[680px]">
                    «Пегас Авто А» — официальный
                    <br />
                    дистрибьютор <span className="text-[#ff4d5e]">StarLine</span> в Атырау
                </h1>
                <div className="h-1 w-16 bg-[#e30016] my-5" />
                <p className="max-w-[560px] text-neutral-300 text-base md:text-lg">
                    Продаём оригинальное оборудование StarLine оптом и в розницу со своего склада
                    в Атырау и ставим его в собственных установочных центрах. Работаем в составе
                    Kristall-Auto — официального дистрибьютора StarLine в Казахстане.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                    <a
                        href="https://wa.me/77023923222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#e30016] hover:bg-[#b80012] px-6 py-3 font-bold transition-colors"
                    >
                        <MessageCircle className="h-5 w-5" />
                        Написать в WhatsApp
                    </a>
                    <a
                        href="/ustanovka-signalizacii-atyrau/"
                        className="inline-flex items-center gap-2 border-2 border-white/80 hover:border-[#e30016] hover:text-[#ff4d5e] px-6 py-3 font-bold transition-colors"
                    >
                        Цены на установку
                    </a>
                    <Link
                        href="/services"
                        className="inline-flex items-center gap-2 px-6 py-3 font-bold text-neutral-300 hover:text-white transition-colors"
                    >
                        Все услуги →
                    </Link>
                </div>

                <div className="mt-10 grid gap-px bg-white/10 grid-cols-2 lg:grid-cols-4 max-w-[720px]">
                    {[
                        { t: "Склад в Атырау", d: "отгрузка в день заявки" },
                        { t: "Опт и розница", d: "оригинал напрямую" },
                        { t: "от 30 000 ₸", d: "работа по установке" },
                        { t: "до 5 лет", d: "гарантия StarLine" },
                    ].map((x) => (
                        <div key={x.t} className="bg-[#101010] px-4 py-3">
                            <div className="text-xl font-extrabold">{x.t}</div>
                            <div className="text-xs text-neutral-400 uppercase tracking-wide">
                                {x.d}
                            </div>
                        </div>
                    ))}
                </div>

                <p className="mt-6 flex items-center gap-2 text-xs text-neutral-400">
                    <ShieldCheck className="h-4 w-4 text-[#ff4d5e]" />
                    Поставки напрямую от производителя — только оригинал, с серийными номерами
                </p>
            </div>
        </section>
    );
};

export default HomeHero;
