
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


const MainLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    const { userId, sessionClaims } = auth();

    const isAdmin = checkRole('admin') ? true : checkRole('moderator') ? true : false 

    if(sessionClaims?.metadata.role === "admin" || process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "false"){

    return (
        <div className="h-full">
{/*             
            {process.env.WARNING === "true" && sessionClaims?.metadata.role !== "admin" && sessionClaims?.metadata.role !== "moderator" && <WarningDialog/>} */}

            <div className="h-[60px] md:h-[80px] fixed inset-y-0 w-full z-50" >
                <Navbar isAdmin={isAdmin}>
                    <RoleButton/>
                </Navbar> 
            </div>
            <div className="hidden md:flex h-full md:w-56 xl:w-72 flex-col fixed inset-y-0 z-45 pt-[80px] border-r shadow-lg dark:shadow-accent">
                <Sidebar />
            </div>
            <main className="pt-[60px] md:pt-[80px] h-full md:pl-56 xl:pl-72">
                {children}
            </main>
        </div>
    )
    }


    if(process.env.NEXT_PUBLIC_MAINTENANCE_MODE === "true"){
        return (
            <div className="h-full">
                <div className="h-[60px] md:h-[80px] fixed inset-y-0 w-full z-50" >
                    <Navbar isAdmin={isAdmin}>
                        <RoleButton/>
                        {/* {checkRole("admin") ?
                        <Link href="/admin/main" className="flex justify-center items-center">
                            <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20" type="button">
                                <LucideShieldAlert className="h-5 w-5"/>
                                <p className="sr-only">Страница администратора</p>
                            </Button>
                        </Link> 
                        : checkRole("moderator") ?
                        <Link href="/employee/schedule" className="flex justify-center items-center">
                            <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20" type="button">
                                <Pencil className="h-5 w-5"/>
                                <p className="sr-only">Создать запись</p>
                            </Button>
                        </Link> : null
                        }                     */}
                    </Navbar>
                </div>
                <div className="hidden md:flex h-full md:w-56 xl:w-72 flex-col fixed inset-y-0 z-50 pt-[80px]">
                    <Sidebar />
                </div>
                <main className="pt-[60px] md:pt-[80px] h-full md:pl-56 xl:pl-72">
                    <div className="p-4 w-full h-full flex justify-center">
                        <div className="pt-[20vh] flex flex-col items-center">
                            <h1 className="text-xl font-medium text-center">
                                Сайт находится в разработке или на техническом обслуживании.
                            </h1>
                            <p className="text-md text-center">
                                Приносим извинения за предоставленные неудобства.
                            </p>
                        </div>
                    </div>
                </main>
            </div>
          );
    }

    return (
        <div className="h-full">
            <div className="h-[60px] md:h-[80px] fixed inset-y-0 w-full z-50" >
                <Navbar isAdmin={isAdmin}>
                    <RoleButton/>
                    {/* {checkRole("admin") ?
                    <Link href="/admin/main" className="flex justify-center items-center">
                        <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20">
                            <LucideShieldAlert className="h-5 w-5"/>
                        </Button>
                    </Link> 
                    : checkRole("moderator") ?
                    <Link href="/employee/schedule" className="flex justify-center items-center">
                        <Button variant="ghost" className="p-3 hover:bg-slate-200/70 border-slate-200/20">
                            <Pencil className="h-5 w-5"/>
                        </Button>
                    </Link> : null
                    }                     */}
                </Navbar>
            </div>
            <div className="hidden md:flex h-full md:w-56 xl:w-72 flex-col fixed inset-y-0 z-50 pt-[80px]">
                <Sidebar />
            </div>
            <main className="pt-[60px] md:pt-[80px] h-full md:pl-56 xl:pl-72">
                {children}
            </main>
        </div>
      );
}
 
export default MainLayout;