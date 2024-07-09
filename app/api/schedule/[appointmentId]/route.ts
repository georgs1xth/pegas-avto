import { checkRole } from "@/app/utils/check-role"
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: {params: { appointmentId: string}}
) {
    try {
        const { userId } = auth()

        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
          

        const appointment = await db.appointment.findUnique({
            where: {
                id: params.appointmentId
            }
        })

        if(!appointment) {
            return new NextResponse("Not found", { status: 404 })
        }

        const deletedAppointment = await db.appointment.delete({
            where: {
                id: params.appointmentId
            }
        })

        return NextResponse.json(deletedAppointment);

    } catch (error) {
        console.log("[APPOINTMENT_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { appointmentId: string } },
) {
    try {
        const { userId } = auth();
        const { appointmentId } = params;
        const values = await req.json();
        
        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
    
        const appointment = await db.appointment.update({
            where: {
                id: appointmentId
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(appointment)
    } catch (error) {
        console.log("[APPOINTMENT_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}