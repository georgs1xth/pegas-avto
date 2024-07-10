"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
    appointmentId: string;
    btnStyle: "icon" | "destructive"
}

export const DeleteAction = ({
    appointmentId,
    btnStyle
}: ActionsProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async () => {
        try {
            setIsLoading(true);

            await axios.delete(`/api/schedule/${appointmentId}`)

            toast.success("Запись удалена");
            router.refresh()
            router.push(`/employee/schedule/`)
        } catch {
            toast.error("Что-то пошло не так")
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <Button size="inline" variant={btnStyle === "destructive" ? "destructive" : "default"} disabled={isLoading} onClick={onDelete}>
            {btnStyle === "destructive" ? <Trash2/> : <Trash2/>}
        </Button>
    )
}