import { checkRole } from "@/app/utils/check-role";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { sliderItemId: string } },
) {
    try {
        const { userId } = auth()

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
        }

        const slide = await db.mainCarouselItem.findUnique({
            where: {
                id: params.sliderItemId
            }
        })

        if (!slide) {
            return new NextResponse("Not found", { status: 404 })
        }

        const deletedSlide = await db.mainCarouselItem.delete({
            where: {
                id: params.sliderItemId
            }
        })

        return NextResponse.json(deletedSlide)
    } catch (error) {
        console.log("[SLIDE_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { sliderItemId: string } },
) {
    try {
        const { userId } = auth();
        const { sliderItemId } = params;
        const values = await req.json();
        
        if (!checkRole("admin") && userId){
            return new NextResponse("Not enough rights", { status: 401})
        }
    
        const slide = await db.mainCarouselItem.update({
            where: {
                id: sliderItemId
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(slide)
    } catch (error) {
        console.log("[SLIDER_ITEM_ID]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}