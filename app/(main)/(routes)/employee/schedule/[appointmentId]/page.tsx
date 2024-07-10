import { checkRole } from "@/app/utils/check-role"
import { Banner } from "@/components/banner"
import { IconBadge } from "@/components/icon-badge"
import db from "@/lib/db"
import { LayoutDashboard, User } from "lucide-react"
import { redirect } from "next/navigation"

import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
  } from "@/components/ui/breadcrumb"
import { DeleteAction } from "./_components/delete-action"
import { NameForm } from "./_components/name-form"
import { PhoneForm } from "./_components/phone-form"
import { CarForm } from "./_components/car-form"
import { DateForm } from "./_components/date-form"
import { PaymentForm } from "./_components/payment-form"
  

const AppointmentIdPage = async ({
    params
}: {
    params: { appointmentId: string}
}) => {

    if(!checkRole("admin")){
        return redirect("/")
    }

    const appointment = await db.appointment.findUnique({
        where: {
            id: params.appointmentId
        }
    });

    if(!appointment){
        return redirect("/")
    }

    const requiredFields = [
        appointment.name,
        appointment.phone,
        appointment.date,
        appointment.amount,
        appointment.car,
        appointment.total,
    ]

    const totalFields = requiredFields.length;

    const completedFields = requiredFields.filter(Boolean).length;
    
    const completionText = `(${completedFields}/${totalFields})`

    const isComplete = requiredFields.every(Boolean);
    
    return (
        <>
            <div className="p-4">
                <Breadcrumb>
                    <BreadcrumbList>
                        
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/employee/schedule">Все записи</BreadcrumbLink>
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>Эта запись</BreadcrumbPage>
                            </BreadcrumbItem>

                    </BreadcrumbList>
                </Breadcrumb>
            </div>
            <div className="p-4">

            <div className="flex items-center justify-between">
                    <div className="flex flex-col gap-y-2">
                        <h1 className="text-2xl font-medium">
                            Настройки записи
                        </h1>
                        <span className="text-sm text-slate-700">
                            Заполните все строки {completionText}
                        </span>
                    </div>
                    <div className="w-40">
                        <DeleteAction
                            appointmentId={appointment.id}
                            btnStyle="icon"
                        />
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-6 mt-16">
                    <div>
                        <div className="flex items-center gap-x-2">
                            <IconBadge icon={User}/>
                            <h2 className="text-xl">
                                Клиент
                            </h2>
                        </div>
                        <NameForm 
                            initialData={appointment}
                            appointmentId={appointment.id}
                            />
                        <PhoneForm 
                            initialData={appointment}
                            appointmentId={appointment.id}
                            />
                        <CarForm
                            initialData={appointment}
                            appointmentId={appointment.id}
                            />
                        <DateForm
                            initialData={appointment}
                            appointmentId={appointment.id}
                        />
                        <PaymentForm
                            initialData={appointment}
                            appointmentId={appointment.id}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default AppointmentIdPage;