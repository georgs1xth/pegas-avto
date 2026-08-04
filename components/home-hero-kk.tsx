import Link from "next/link";
import { MessageCircle, ShieldCheck } from "lucide-react";

// Hero в стиле Kristall-Auto: чёрный фон, красная скошенная плашка, крупный uppercase-заголовок.
const HomeHeroKk = () => {
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
                    Атырау · 15 жыл · 10 000+ орнату
                </p>
                <h1 className="text-3xl md:text-5xl font-extrabold uppercase leading-[1.1] tracking-tight max-w-[680px]">
                    Атырауда <span className="text-[#ff4d5e]">StarLine</span>
                    <br />
                    сигнализациясын орнату
                </h1>
                <div className="h-1 w-16 bg-[#e30016] my-5" />
                <p className="max-w-[560px] text-neutral-300 text-base md:text-lg">
                    Қазақстандағы StarLine ресми дистрибьюторы Kristall-Auto филиалы.
                    Автоқосу, жұмсақ отырғызуы бар авторлық орнату, түпнұсқа жабдық
                    және 5 жылға дейін кепілдік.
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                    <a
                        href="https://wa.me/77023923222"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#e30016] hover:bg-[#b80012] px-6 py-3 font-bold transition-colors"
                    >
                        <MessageCircle className="h-5 w-5" />
                        WhatsApp-қа жазу
                    </a>
                    <a
                        href="/kk/ustanovka-signalizacii-atyrau"
                        className="inline-flex items-center gap-2 border-2 border-white/80 hover:border-[#e30016] hover:text-[#ff4d5e] px-6 py-3 font-bold transition-colors"
                    >
                        Орнату бағалары
                    </a>
                    <Link
                        href="/kk/services"
                        className="inline-flex items-center gap-2 px-6 py-3 font-bold text-neutral-300 hover:text-white transition-colors"
                    >
                        Барлық қызметтер →
                    </Link>
                </div>

                <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3 max-w-[720px]">
                    {[
                        { t: "30 000 ₸ бастап", d: "орнату жұмысы" },
                        { t: "2–2,5 сағат", d: "стандартты орнату" },
                        { t: "5 жылға дейін", d: "StarLine кепілдігі" },
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
                    Түпнұсқа жабдық дистрибьютордан тікелей
                </p>
            </div>
        </section>
    );
};

export default HomeHeroKk;
