import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

import  db  from "@/lib/db";
import { checkRole } from "@/app/utils/check-role";

export async function DELETE(
    req: Request,
    { params }: { params: { catalogItemId: string, imageId: string}}
) {
    try {
        const { userId } = auth()

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
        }
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }


        const image = await db.imageSrcMultiple.delete({
            where: {
                itemId: params.catalogItemId,
                id: params.imageId,
            }
        })
        
        return NextResponse.json(image);
    } catch (error) {
        console.log("ATTACHMENT_ID", error)
        return new NextResponse("Internal Error", { status: 500});
    }
}