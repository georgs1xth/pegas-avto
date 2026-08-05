import { Clock, Handshake, Smile } from "lucide-react";
import MainCarousel from "./_components/main-carousel";
import InfoCard from "@/components/info-card";
import { Metadata } from "next";
import HomeHero from "@/components/home-hero";
import HomeSchema from "@/components/home-schema";
import WholesaleSection from "@/components/wholesale-section";
import DistributorSection from "@/components/distributor-section";
import type { CarouselSlide } from "./_components/main-carousel";

export const metadata: Metadata = {
    title: { absolute: "«Пегас Авто А» — официальный дистрибьютор StarLine в Атырау" },
    description: "«Пегас Авто А» — официальный дистрибьютор StarLine в Атырау: оптовые и розничные поставки оригинального оборудования со склада в городе, установка в двух точках. 15 лет, 10 000+ установок.",
};

// Слайды захардкожены (сняты с прода 03.08.2026) — без запроса к БД, чтобы главная грузилась быстрее.
// Фото остаются на uploadthing (utfs.io), ссылки те же.
const carouselItems: CarouselSlide[] = [
    {
        id: "static-1",
        title: "StarLine — надежная защита вашего автомобиля.",
        description: "Установка Автосигнализаций.",
        imageUrl: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
        btnHref: "/ustanovka-signalizacii-atyrau",
    },
    {
        id: "static-2",
        title: "Не дайте жаре помешать вашему комфорту!",
        description: "Заправка и ремонт Автокондиционеров.",
        imageUrl: "https://utfs.io/f/2951b9db-039b-4d6c-81e5-04c37c4b6a84-7xbfek.webp",
        btnHref: "/services/zapravka-avtokondicionerov",
    },
    {
        id: "static-3",
        title: "Выявляем проблемы авто компьютерной диагностикой.",
        description: "Компьютерная диагностика авто.",
        imageUrl: "https://utfs.io/f/a85a884d-c4b5-4ebb-a26d-8bca9988bb09-veq5ho.webp",
        btnHref: "/services/kompyuternaya-diagnostika",
    },
    {
        id: "static-4",
        title: "Оставили ключи в машине или сел аккумулятор?",
        description: "Аварийное вскрытие и прикуривание авто.",
        imageUrl: "https://utfs.io/f/bc434ec0-85eb-4bd5-b4fc-c9d4584a32b9-px1a7k.webp",
        btnHref: "/services/avarijnoe-vskrytie",
    },
];

const Home = () => {

    return (
        <div className="flex flex-col gap-y-6">
            <HomeSchema/>
            <HomeHero/>
            <div className="mx-auto w-full max-w-[1140px] px-4 flex flex-col gap-y-4">
            <MainCarousel
                carouselItems={carouselItems}
            />
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4 p-2">
                <InfoCard
                icon={Clock}
                label="15 лет на рынке"
                description="Мы работаем на рынке автоуслуг Атырау более 15 лет!"
                wideness="one"
                />
                <InfoCard
                icon={Smile}
                label="Гарантия на работу"
                description="Даём гарантию на выполненную работу. Всё будет быстро и качественно"
                />
                <InfoCard
                icon={Handshake}
                label="Работаем с организациями"
                description="Мы предоставляем организациям полный пакет документов для бухгалтерии. Акты выполненных работ, cчета-фактуры и т.д. Всё профессионально и в срок."
                wideness="two"
                addButton
                btnHref="/partnership"
                />
            </div>
            <DistributorSection/>
            <WholesaleSection/>
            </div>
        </div>
     );
}

export default Home;
