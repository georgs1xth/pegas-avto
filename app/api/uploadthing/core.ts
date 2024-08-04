import { checkRole } from "@/app/utils/check-role";
import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
    
    const { userId } = auth()

    if (!checkRole("admin"))throw new Error("Unautrhorized")
    // if(!userId) throw new Error("Unautrhorized");

    // if(sessionClaims?.metadata.role !== "admin" || "moderator"){
    //     throw new Error("Not enough rights")
    // }

    return { userId };
}

export const OurFileRouter = {
    Image: f({image: { maxFileSize: "2MB", maxFileCount: 1 }})
        .middleware(() => handleAuth())
        .onUploadComplete(() =>{}),
    CatalogItemImage: f({image: { maxFileSize: "2MB", maxFileCount: 10 }})
        .middleware(() => handleAuth())
        .onUploadComplete(() =>{}),
} satisfies FileRouter;

export type OurFileRouter = typeof OurFileRouter;