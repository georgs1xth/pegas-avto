import db  from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function POST(
    req: Request,
    { params }: { params: { catalogItemId: string } }
) {
    try {
        const { userId } = auth();

        const { url } = await req.json()

        if (!userId){
            return new NextResponse("Unauthorized", {status: 401 });
        }



        const lastImage = await db.imageSrcMultiple.findFirst ({
            where: {
                itemId: params.catalogItemId,
            },
            orderBy: {
                position: "desc"
            }
        })

        const newPosition = lastImage ? lastImage.position + 1 : 1;

        const image = await db.imageSrcMultiple.create({
            data: {
                name: (new Date()).toLocaleString(),
                imageSrc: url,
                itemId: params.catalogItemId,
                position: newPosition
            }
        })

        return NextResponse.json(image);

    } catch (error) {
        console.log("[CATALOG_ITEM_IMAGES]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}