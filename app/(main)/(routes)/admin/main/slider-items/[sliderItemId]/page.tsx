import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import db from "@/lib/db"
import { LayoutDashboard } from "lucide-react"
import { redirect } from "next/navigation"
import { Actions } from "./_components/actions"

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
            <div className="p-6">
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={LayoutDashboard}/>
                            <h2 className="text-xl">
                                Редактирование слайда
                            </h2>
                        </div>
                        {/* <TitleForm 
                            initialData={course}
                            courseId={course.id}
                            />
                        <DescriptionForm
                            initialData={course}
                            courseId={course.id}
                            />
                        <ImageForm
                            initialData={course}
                            courseId={course.id}
                            />
                        <PositionForm
                            initialData={course}
                            courseId={course.id}
                            options={categories.map((category) => ({
                                label: category.name,
                                value: category.id
                            }))}
                            /> */}
                    
                    </div>
                </div>
            </div>
        </>
    )
}

export default SlideIdPage;