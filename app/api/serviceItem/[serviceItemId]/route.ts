import { checkRole } from "@/app/utils/check-role"
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: {params: { serviceItemId: string}}
) {
    try {
        const { userId } = auth()

        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
          

        const serviceItem = await db.serviceItem.findUnique({
            where: {
                id: params.serviceItemId
            }
        })

        if(!serviceItem) {
            return new NextResponse("Not found", { status: 404 })
        }

        const deletedServiceItem = await db.serviceItem.delete({
            where: {
                id: params.serviceItemId
            }
        })

        return NextResponse.json(deletedServiceItem);

    } catch (error) {
        console.log("[SERVICE_ITEM_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { serviceItemId: string } },
) {
    try {
        const { userId } = auth();
        const { serviceItemId } = params;
        const values = await req.json();
        
        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
    
        const serviceItem = await db.serviceItem.update({
            where: {
                id: serviceItemId
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(serviceItem)
    } catch (error) {
        console.log("[SERVICE_ITEM_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}