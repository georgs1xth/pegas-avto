import { checkRole } from "@/app/utils/check-role"
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: {params: { catalogItemId: string}}
) {
    try {
        const { userId } = auth()

        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
          

        const catalogItem = await db.catalogItem.findUnique({
            where: {
                id: params.catalogItemId
            }
        })

        if(!catalogItem) {
            return new NextResponse("Not found", { status: 404 })
        }

        const deletedCatalogItem = await db.catalogItem.delete({
            where: {
                id: params.catalogItemId
            }
        })

        return NextResponse.json(deletedCatalogItem);

    } catch (error) {
        console.log("[CATALOG_ITEM_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { catalogItemId: string } },
) {
    try {
        const { userId } = auth();
        const { catalogItemId } = params;
        const values = await req.json();
        
        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
    
        const catalogItem = await db.catalogItem.update({
            where: {
                id: catalogItemId
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(catalogItem)
    } catch (error) {
        console.log("[CATALOG_ITEM_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}