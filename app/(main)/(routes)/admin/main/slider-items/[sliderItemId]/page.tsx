import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import db from "@/lib/db"
import { LayoutDashboard } from "lucide-react"
import { redirect } from "next/navigation"
import { Actions } from "./_components/actions"
import { TitleForm } from "./_components/title-form"
import { DescriptionForm } from "./_components/description-form"
import { ImageForm } from "./_components/image-form"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems"
import { BtnHrefForm } from "./_components/btn-href-form"
import { PositionForm } from "./_components/position-form"

const SlideIdPage = async ({
    params
}: {
    params: { sliderItemId: string}
}) => {

    if(!checkRole("admin")){
        return redirect("/")
    }

    const slide = await db.mainCarouselItem.findUnique({
        where: {
            id: params.sliderItemId
        }
    });

    if(!slide){
        return redirect("/")
    }

    const requiredFields = [
        slide.title,
        slide.description,
        slide.imageUrl,
        slide.position,
        slide.btnHref,
    ]

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`

    const isComplete = requiredFields.every(Boolean);
    
    return (
        <>
        {!slide.isPublished && (
            <Banner 
                label="Этот слайд не опубликован. Он не будет виден посетителям."
            />
        )}
            <div className="p-2">
                <Carousel>
                    <CarouselContent>
                        <CarouselItems
                            key={slide.id}
                            id={slide.id}
                            itemTitle={slide.title}
                            itemDescription={slide.description!}
                            imageAlt={slide.id}
                            imageSrc={slide.imageUrl!}
                            // btnHref={slide.btnHref!}
                            // btnHref={slide.btnHref!}
                        />
                    </CarouselContent>
                </Carousel>

            <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Course setup
                        </h1>
                        <span className="text-sm text-slate-700">
                            Complete all fields {completionText}
                        </span>
                    </div>
                    <Actions
                        disabled={!isComplete}
                        slideId={params.sliderItemId}
                        isPublished={slide.isPublished}
                    />
                </div>
                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={LayoutDashboard}/>
                            <h2 className="text-xl">
                                Редактирование слайда
                            </h2>
                        </div>
                        <TitleForm 
                            initialData={slide}
                            slideId={slide.id}
                            />
                        <DescriptionForm
                            initialData={slide}
                            slideId={slide.id}
                            />
                        <ImageForm
                            initialData={slide}
                            slideId={slide.id}
                            />
                        <BtnHrefForm
                            initialData={slide}
                            slideId={slide.id}
                            />
                        <PositionForm
                            initialData={slide}
                            slideId={slide.id}
                            />
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideIdPage;