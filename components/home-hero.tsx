import Link from "next/link";
import Image from "next/image";
import { MessageCircle, ShieldCheck } from "lucide-react";

// Hero в стиле Kristall-Auto: чёрный фон, красная скошенная плашка, крупный uppercase-заголовок.
const HomeHero = () => {
    return (
        <section className="relative overflow-hidden bg-[#101010] text-white">
            {/* красный скошенный блок справа */}
            <div
                aria-hidden
                className="absolute inset-y-0 right-[-90px] w-[38%] bg-[#e30016] opacity-95"
                style={{ transform: "skew(-18deg)" }}
            />
            <div
                aria-hidden
                className="absolute inset-y-0 right-[26%] w-[10px] bg-white/10"
                style={{ transform: "skew(-18deg)" }}
            />

            {/* фото работы — компактная карточка на красном поле */}
            <div
                className="hidden lg:block absolute right-[7%] top-1/2 -translate-y-1/2 w-[240px] h-[320px] overflow-hidden shadow-2xl"
                style={{ transform: "translateY(-50%) skew(-12deg)" }}
            >
                <div
                    className="relative h-full w-[130%] -ml-[15%]"
                    style={{ transform: "skew(12deg)" }}
                >
                    <Image
                        src="/img/hero-car.webp"
                        alt="Установка сигнализации StarLine на Toyota Highlander в Атырау — СТО Пегас Авто А"
                        fill
                        priority
                        sizes="(min-width:1024px) 260px, 0px"
                        className="object-cover"
                    />
                </div>
            </div>
            <div
                aria-hidden
                className="hidden lg:block absolute right-[7%] top-1/2 w-[240px] h-[320px] border-[3px] border-white/80 pointer-events-none"
                style={{ transform: "translate(14px,-50%) skew(-12deg)" }}
            />

            <div className="relative mx-auto max-w-[1140px] px-4 py-12 md:py-16 lg:pr-[34%]">
                <p className="text-[#ff4d5e] font-bold tracking-[0.18em] text-xs md:text-sm uppercase mb-3">
                    Атырау · 15 лет · 10 000+ установок
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-[1.1] tracking-tight max-w-[680px]">
                    Установка сигнализаций
                    <br />
                    <span className="text-[#ff4d5e]">StarLine</span> в Атырау
                </h1>
                <div className="h-1 w-16 bg-[#e30016] my-5" />
                <p className="max-w-[560px] text-neutral-300 text-base md:text-lg">
                    Филиал Kristall-Auto — официального дистрибьютора StarLine в Казахстане.
                    Автозапуск, авторская установка с мягкой посадкой, оригинальное оборудование
                    и гарантия до 5 лет.
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

                <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3 max-w-[720px]">
                    {[
                        { t: "от 30 000 ₸", d: "работа по установке" },
                        { t: "2–2,5 часа", d: "стандартная установка" },
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
                    Оригинальное оборудование напрямую от дистрибьютора
                </p>
            </div>
        </section>
    );
};

export default HomeHero;
