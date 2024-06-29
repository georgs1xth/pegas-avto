import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

import db from "@/lib/db";

export async function PATCH(
    req: Request,
    { params } : { params: { sliderItemId: string }} 
) {
    try {
        const { userId } = auth()

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }

        const slide = await db.mainCarouselItem.findUnique({
            where: {
                id: params.sliderItemId,
            }
        })

        if (!slide) {
            return new NextResponse("Not Found", { status: 404 })
        }

        const unpublishedSlide = await db.mainCarouselItem.update({
            where: {
                id: params.sliderItemId,
            },
            data: {
                isPublished: false
            }
        })

        return NextResponse.json(unpublishedSlide)

    } catch (error) {
        console.log("[SLIDE_ID_UNPUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}