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

        if (!slide.title || !slide.description || !slide.imageUrl || !slide.position){
            return new NextResponse("Missing required fields", { status: 401 })
        }

        const publishedSlide = await db.mainCarouselItem.update({
            where: {
                id: params.sliderItemId,
            },
            data: {
                isPublished: true
            }
        })

        return NextResponse.json(publishedSlide)

    } catch (error) {
        console.log("[SLIDE_ID_PUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}