
import Link from "next/link";
import { checkRole } from "../utils/check-role";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import { LucideShieldAlert, Pencil } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import RoleButton from "@/components/role-button";
import { Nabla } from "next/font/google";
import toast from "react-hot-toast";
import WarningDialog from "@/components/warning-dialog";


export const metadata: Metadata = {
    title: {
      default: "СТО Пегас avto A",
      template: "%s | СТО Пегас avto A",
    },
    other: { "google-site-verification": "YGfdW5HMTs0VsVfYZmKLqpQm2KfGiOQ5D3a0CUKYr8c"        
    }
  };

const MainLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    const { userId, sessionClaims } = auth();

    const isAdmin = checkRole('admin') ? true : checkRole('moderator') ? true : false 

    return (
        <div className="h-full">
{/*             
            {process.env.WARNING === "true" && sessionClaims?.metadata.role !== "admin" && sessionClaims?.metadata.role !== "moderator" && <WarningDialog/>} */}

            <div className="h-[60px] md:h-[80px] fixed inset-y-0 w-full z-50" >
                <Navbar isAdmin={isAdmin}>
                    <RoleButton/>
                </Navbar> 
            </div>
            <div className="hidden md:flex h-full md:w-56 xl:w-72 flex-col fixed inset-y-0 z-40 pt-[80px] border-r shadow-lg dark:shadow-accent">
                <Sidebar />
            </div>
            <main className="pt-[60px] md:pt-[80px] h-full md:pl-56 xl:pl-72">
                {children}
            </main>
        </div>
    )
}
 
export default MainLayout;