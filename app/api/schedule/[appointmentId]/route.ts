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

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
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