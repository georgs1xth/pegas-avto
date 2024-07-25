import { checkRole } from "@/app/utils/check-role";
import db from "@/lib/db";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";



export async function POST(
    req: Request,
) {
    try {
        const { title, Price } = await req.json();

        const { userId } = auth()

        if (!checkRole("admin") && userId || !checkRole("admin") &&!userId){
            return new NextResponse("Not enough rights", { status: 401})
        }
        
        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }
        
        const catalogItem = await db.catalogItem.create({
            data: {
                title,
                Price,
            }
        })

        return NextResponse.json(catalogItem);


    } catch (error) {
        console.log("[catalogItemCreate]", error);
        return new NextResponse("Internal Error", { status: 500});
    }
}