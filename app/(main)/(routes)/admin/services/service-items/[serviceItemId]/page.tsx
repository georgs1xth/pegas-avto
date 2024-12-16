import db from "@/lib/db"

import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import { LayoutDashboard } from "lucide-react"
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
import { TitleForm } from "./_components/title-form"
import { DescriptionForm } from "./_components/description-form"
import { PriceForm } from "./_components/price-form"
import { ImageForm } from "./_components/image-form"
import { MoreDescriptionForm } from "./_components/more-description-form"
import { CompanyForm } from "./_components/company-form"

const AdminCatalogItemPage = async ({
    params
}: {
    params: { serviceItemId: string}
}) => {

    if(!checkRole("admin")){
        return redirect("/")
    }

    const serviceItem = await db.serviceItem.findUnique({
        where: {
            id: params.serviceItemId
        }
    });

    
    const companies = await db.company.findMany({
        orderBy: {
            name: "asc"
        }
    })


    if(!serviceItem){
        return redirect("/")
    }

    const requiredFields = [
        serviceItem.title,
        serviceItem.description,
        serviceItem.imageSrc
    ]

    const totalFields = requiredFields.length;
    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`

    const isComplete = requiredFields.every(Boolean);
    
    return (
        <>
        {!serviceItem.isPublished && (
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
                                <BreadcrumbLink href="/admin/services/service-items">Все услуги</BreadcrumbLink>
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>Эта услуга</BreadcrumbPage>
                            </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>

            <div className="flex items-center justify-between p-4">
                <div className="flex flex-col gap-y-2">
                    <h1 className="text-2xl font-medium">
                        Настройки Услуги
                    </h1>
                    <span className="text-sm text-slate-700">
                        Заполните все строки {completionText}
                    </span>
                </div>
                <Actions
                    disabled={!isComplete}
                    serviceItemId={params.serviceItemId}
                    isPublished={serviceItem.isPublished}
                />
            </div>
            <div className="grid grid-cols-1 gap-6 mt-16 px-4 pb-4">
                <div>
                    <div className="flex items-center gap-x-2">
                        <IconBadge icon={LayoutDashboard}/>
                        <h2 className="text-xl">
                            Редактирование Услуги
                        </h2>
                    </div>
                    <TitleForm 
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                        />
                    <CompanyForm
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                        options={companies.map((company) => ({
                            label: company.name,
                            value: company.id,
                        }))}
                        />
                    <DescriptionForm
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                        />
                    <MoreDescriptionForm
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                    />
                    <PriceForm
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                        />
                    <ImageForm
                        initialData={serviceItem}
                        serviceItemId={serviceItem.id}
                    />
                </div>
            </div>
        </>
    )
}

export default AdminCatalogItemPage;