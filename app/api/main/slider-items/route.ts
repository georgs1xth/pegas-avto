import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
) {
    try {
        const { userId } = auth();
        const { title } = await req.json();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        
        const slide = await db.mainCarouselItem.create({
            data: {
                title
            }
        })

        return NextResponse.json(slide);


    } catch (error) {
        console.log("[mainSlides]", error);
        return new NextResponse("Internal Error", { status: 500});
    }
}