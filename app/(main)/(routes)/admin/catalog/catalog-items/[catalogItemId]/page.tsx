import db from "@/lib/db"

import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import { Image, LayoutDashboard } from "lucide-react"
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
import { TitleForm } from "./_components/title-form"
import { DescriptionForm } from "./_components/description-form"
import { IsAvailableForm } from "./_components/is-available-form"
import { PriceForm } from "./_components/price-form"
import { ImagesForm } from "./_components/images-form"
import { CategoryForm } from "./_components/category-form"
import { value } from "effect/Redacted"

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
        },
        include: {
            imageSrcs: {
                orderBy: {
                    position: "asc"
                }
            }
        }
    });


    const categories = await db.category.findMany({
        orderBy: {
            name: "asc"
        }
    })


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
                        Настройки Товара
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
            <div className="grid grid-cols-1 gap-6 mt-16 px-4 pb-4">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className="text-xl">
                            Редактирование товара
                        </h2>
                    </div>
                    <TitleForm 
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                        />
                    <DescriptionForm
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                        />
                    <IsAvailableForm
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                    />
                    <CategoryForm
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                        options={categories.map((category) => ({
                            label: category.name,
                            value: category.id,
                        }))}
                        />
                    <PriceForm
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                        />
                </div>
                <div className="w-full h-full">
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={Image}/>
                        <h2 className="text-xl">
                            Галерея товара
                        </h2>
                    </div>
                    <ImagesForm
                        initialData={catalogItem}
                        catalogItemId={catalogItem.id}
                        />
                </div>
            </div>
        </>
    )
}

export default AdminCatalogItemPage;