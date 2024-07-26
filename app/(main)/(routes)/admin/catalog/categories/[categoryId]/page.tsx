import db from "@/lib/db"

import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { redirect } from "next/navigation"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { Actions } from "./_components/actions"
import { IconBadge } from "@/components/icon-badge"
import { LayoutDashboard } from "lucide-react"
import { TitleForm } from "./_components/title-form"
import { ImageForm } from "./_components/image-form"

const AdminCatalogItemPage = async ({
    params
}: {
    params: { categoryId: string}
}) => {

    if(!checkRole("admin")){
        return redirect("/")
    }

    const category = await db.category.findUnique({
        where: {
            id: params.categoryId
        },
    });

    if(!category){
        return redirect("/")
    }

    const requiredFields = [
        category.name,
        category.imageSrc
    ]

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`

    const isComplete = requiredFields.every(Boolean);
    
    return (
        <>
        {!category.isPublished && (
            <Banner 
                label="Эта категория не опубликована. Она не будет видна посетителям."
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
                                <BreadcrumbLink href="/admin/catalog/categories">Все категории</BreadcrumbLink>
                            
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>Эта категория</BreadcrumbPage>
                            </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Настройки категории
                    </h1>
                    <span className="text-sm text-slate-700">
                        Заполните все строки {completionText}
                    </span>
                </div>
                <Actions
                    disabled={!isComplete}
                    categoryId={params.categoryId}
                    isPublished={category.isPublished}
                />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-16 px-4 pb-4">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className="text-xl">
                            Редактирование категории
                        </h2>
                    </div>
                    <TitleForm 
                        initialData={category}
                        categoryId={category.id}
                        />
                    <ImageForm
                        initialData={category}
                        categoryId={category.id}
                        />
                </div>
            </div>
        </>
    )
}

export default AdminCatalogItemPage;