import { checkRole } from "@/app/utils/check-role";
import  db  from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { serviceItemId: string; } }
){
    try {
        const { userId } = auth()

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
        }
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const serviceItem = await db.serviceItem.findUnique({
            where: {
                id: params.serviceItemId,
            }
        });


        if (!serviceItem || !serviceItem.title || !serviceItem.description) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const publishedServiceItem = await db.serviceItem.update({
            where: {
                id: params.serviceItemId,
            },
            data: {
                isPublished: true,
            }

        });

        return NextResponse.json(publishedServiceItem);

    } catch (error) {
        console.log("[SERVICE_ITEM_PUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}