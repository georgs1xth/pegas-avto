import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const { userId } = auth();
        const { phone, amount, date } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        
        const slide = await db.appointment.create({
            data: {
                phone,
                amount,
                date
            }
        })

        return NextResponse.json(slide);


    } catch (error) {
        console.log("[scheduleAppointmentCreate]", error);
        return new NextResponse("Internal Error", { status: 500});
    }
}