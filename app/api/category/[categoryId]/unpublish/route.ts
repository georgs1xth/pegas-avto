import { checkRole } from "@/app/utils/check-role";
import  db  from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { categoryId: string; } }
){
    try {
        const { userId } = auth()

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
        }
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const unpublishedCategory = await db.category.update({
            where: {
                id: params.categoryId,
            },
            data: {
                isPublished: false,
            }

        });

        return NextResponse.json(unpublishedCategory);

    } catch (error) {
        console.log("[CATEGORY_UNPUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}