import MainCarousel from "../../../(root)/_components/main-carousel";
import db from "@/lib/db";
import { checkRole } from "@/app/utils/check-role";
import { redirect } from "next/navigation";
import SlidesOverview from "./_components/slides-overview";

const SlideListPage = async () => {
    
    if(!checkRole("admin")){
        return redirect("/");
    }

    const carouselItems = await db.mainCarouselItem.findMany({
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
        <div className="p-2 md:p-4 xl:p-6">
          <SlidesOverview
            carouselItems={carouselItems}
          />
        </div>
     );
}
 
export default SlideListPage;