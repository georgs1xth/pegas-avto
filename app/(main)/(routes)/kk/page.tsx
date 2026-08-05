import { Clock, Handshake, Smile } from "lucide-react";
import MainCarousel from "../(root)/_components/main-carousel";
import InfoCard from "@/components/info-card";
import { Metadata } from "next";
import HomeHeroKk from "@/components/home-hero-kk";
import HomeSchemaKk from "@/components/home-schema-kk";
import WholesaleSectionKk from "@/components/wholesale-section-kk";
import DistributorSectionKk from "@/components/distributor-section-kk";
import type { CarouselSlide } from "../(root)/_components/main-carousel";

export const metadata: Metadata = {
    title: { absolute: "«Пегас Авто А» — Атыраудағы StarLine ресми дистрибьюторы" },
    description: "«Пегас Авто А» — Атыраудағы StarLine ресми дистрибьюторы: түпнұсқа жабдықты қоймадан көтерме және бөлшектеп сату, екі бөлімшеде орнату. 15 жыл, 10 000+ орнату.",
    alternates: {
        canonical: "https://pegas.georgiy.bond/kk",
        languages: {
            "ru-KZ": "https://pegas.georgiy.bond/",
            "kk-KZ": "https://pegas.georgiy.bond/kk",
            "x-default": "https://pegas.georgiy.bond/",
        },
    },
};

// Слайды — те же фото, что на русской главной (uploadthing), тексты переведены.
const carouselItems: CarouselSlide[] = [
    {
        id: "static-1",
        title: "StarLine — көлігіңіздің сенімді қорғанысы.",
        description: "Автосигнализация орнату.",
        imageUrl: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
        btnHref: "/kk/ustanovka-signalizacii-atyrau",
    },
    {
        id: "static-2",
        title: "Ыстық жайлылығыңызға кедергі болмасын!",
        description: "Автокондиционерді толтыру және жөндеу.",
        imageUrl: "https://utfs.io/f/2951b9db-039b-4d6c-81e5-04c37c4b6a84-7xbfek.webp",
        btnHref: "/kk/services/zapravka-avtokondicionerov",
    },
    {
        id: "static-3",
        title: "Компьютерлік диагностикамен ақауды анықтаймыз.",
        description: "Көлікті компьютерлік диагностикалау.",
        imageUrl: "https://utfs.io/f/a85a884d-c4b5-4ebb-a26d-8bca9988bb09-veq5ho.webp",
        btnHref: "/kk/services/kompyuternaya-diagnostika",
    },
    {
        id: "static-4",
        title: "Кілт көлікте қалды ма, аккумулятор отырды ма?",
        description: "Авариялық ашу және аккумуляторды қуаттандыру.",
        imageUrl: "https://utfs.io/f/bc434ec0-85eb-4bd5-b4fc-c9d4584a32b9-px1a7k.webp",
        btnHref: "/kk/services/avarijnoe-vskrytie",
    },
];

const HomeKk = () => {

    return (
        <div className="flex flex-col gap-y-6">
            <HomeSchemaKk/>
            <HomeHeroKk/>
            <div className="mx-auto w-full max-w-[1140px] px-4 flex flex-col gap-y-4">
            <MainCarousel
                carouselItems={carouselItems}
                btnLabel="Толығырақ"
            />
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4 p-2">
                <InfoCard
                icon={Clock}
                label="Нарықта 15 жыл"
                description="Атыраудағы автоқызмет нарығында 15 жылдан астам жұмыс істеп келеміз!"
                wideness="one"
                />
                <InfoCard
                icon={Smile}
                label="Жұмысқа кепілдік"
                description="Орындалған жұмысқа кепілдік береміз. Барлығы жылдам әрі сапалы болады"
                />
                <InfoCard
                icon={Handshake}
                label="Ұйымдармен жұмыс істейміз"
                description="Ұйымдарға бухгалтерия үшін толық құжат пакетін ұсынамыз: орындалған жұмыс актілері, шоттар және т.б. Барлығы кәсіби түрде әрі уақытында."
                wideness="two"
                addButton
                btnHref="/kk/partnership"
                />
            </div>
            <DistributorSectionKk/>
            <WholesaleSectionKk/>
            </div>
        </div>
     );
}

export default HomeKk;
