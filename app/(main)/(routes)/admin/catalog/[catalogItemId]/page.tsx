import db from "@/lib/db"

import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import { LayoutDashboard } from "lucide-react"
import { redirect } from "next/navigation"
import { Carousel, CarouselContent } from "@/components/ui/carousel"
import CarouselItems from "@/app/(main)/(routes)/(root)/_components/CarouselItems"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Actions } from "./_components/actions"

const AdminCatalogItemPage = async ({
    params
}: {
    params: { catalogItemId: string}
}) => {

    if(!checkRole("admin")){
        return redirect("/")
    }

    const catalogItem = await db.catalogItem.findUnique({
        where: {
            id: params.catalogItemId
        } 
    });

    if(!catalogItem){
        return redirect("/")
    }

    const requiredFields = [
        catalogItem.Price,
        catalogItem.title,
        catalogItem.description,
        catalogItem.brandId,
        catalogItem.categoryId,
        catalogItem.isAvailable,
    ]

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`

    const isComplete = requiredFields.every(Boolean);
    
    return (
        <>
        {!catalogItem.isPublished && (
            <Banner 
                label="Этот товар не опубликован. Он не будет виден посетителям."
            />
        )}
            <div className="p-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/main">Главная администратора</BreadcrumbLink>
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                        
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/admin/catalog/catalog-items">Все товары</BreadcrumbLink>
                            
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>Этот товар</BreadcrumbPage>
                            </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Настройки слайда
                    </h1>
                    <span className="text-sm text-slate-700">
                        Заполните все строки {completionText}
                    </span>
                </div>
                <Actions
                    disabled={!isComplete}
                    catalogItemId={params.catalogItemId}
                    isPublished={catalogItem.isPublished}
                />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-16 px-4">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className="text-xl">
                            Редактирование товара
                        </h2>
                    </div>
                    {/* <TitleForm 
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
                        /> */}
                </div>
            </div>
        </>
    )
}

export default AdminCatalogItemPage;