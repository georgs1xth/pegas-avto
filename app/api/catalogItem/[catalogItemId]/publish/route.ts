import  db  from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function PATCH(
    req: Request,
    { params }: { params: { catalogItemId: string; } }
){
    try {
        const { userId } = auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 })
        }


        const catalogItem = await db.catalogItem.findUnique({
            where: {
                id: params.catalogItemId,
            }
        });


        if (!catalogItem || !catalogItem.title || !catalogItem.description) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        const publishedCatalogItem = await db.catalogItem.update({
            where: {
                id: params.catalogItemId,
            },
            data: {
                isPublished: true,
            }

        });

        return NextResponse.json(publishedCatalogItem);

    } catch (error) {
        console.log("[CATALOG_ITEM_PUBLISH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}