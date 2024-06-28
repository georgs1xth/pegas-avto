import { Clock, Handshake, Smile } from "lucide-react";
import MainCarousel from "../../(root)/_components/main-carousel";
import InfoCard from "@/components/info-card";
import db from "@/lib/db";
import { checkRole } from "@/app/utils/check-role";
import { redirect } from "next/navigation";

const AdminHome = async () => {
    
    if(!checkRole("admin")){
        return redirect("/");
    }

    const carouselItems = await db.mainCarouselItem.findMany({
        where: {
            isPublished: true
        },
        orderBy: {
            position: "asc"
        },
    })

    carouselItems.unshift({ id: "addCarouselItem",
                            title: "Текст названия примера слайда",
                            description: "Текст описания примера слайда",
                            imageUrl: "/slider-images/ac-automobile.jpg",
                            btnHref: "/admin/main/create/slider-item",
                            position: 0,
                            isPublished: true
    })

    return (
        <div className="p-2 md:p-4 xl:p-6 flex flex-col gap-y-4"> 
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
            
        </div>
     );
}
 
export default AdminHome;