import { checkRole } from "@/app/utils/check-role"
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server"

export async function DELETE(
    req: Request,
    { params }: {params: { categoryId: string}}
) {
    try {
        const { userId } = auth()

        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
          

        const category = await db.category.findUnique({
            where: {
                id: params.categoryId
            }
        })

        if(!category) {
            return new NextResponse("Not found", { status: 404 })
        }

        const deletedCategory = await db.category.delete({
            where: {
                id: params.categoryId
            }
        })

        return NextResponse.json(deletedCategory);

    } catch (error) {
        console.log("[CATEGORY_ID_DELETE]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { categoryId: string } },
) {
    try {
        const { userId } = auth();
        const { categoryId } = params;
        const values = await req.json();
        
        if ((!checkRole("admin") && !checkRole("moderator")) && userId || (!checkRole("admin") && !checkRole("moderator") && !userId)) {
            return new NextResponse("Not enough rights", { status: 401 });
        }
    
        const category = await db.category.update({
            where: {
                id: categoryId
            },
            data: {
                ...values,
            }
        })

        return NextResponse.json(category)
    } catch (error) {
        console.log("[CATALOG_ITEM_ID_PATCH]", error);
        return new NextResponse("Internal Error", { status: 500 })
    }
}