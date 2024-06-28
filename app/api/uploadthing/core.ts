import { auth } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
    
    const { sessionClaims, userId } = auth()
    
    if(!userId) throw new Error("Unautrhorized");

    if(sessionClaims?.metadata.role !== "admin" || "moderator"){
        throw new Error("Not enough rights")
    }

    return { userId };
}

export const OurFileRouter = {
    Image: f({image: { maxFileSize: "8MB", maxFileCount: 1 }})
        .middleware(() => handleAuth())
        .onUploadComplete(() =>{}),
} satisfies FileRouter;

export type OurFileRouter = typeof OurFileRouter;