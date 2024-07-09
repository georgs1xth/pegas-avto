"use client";

import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

interface ActionsProps {
    appointmentId: string;
}

export const DeleteAction = ({
    appointmentId
}: ActionsProps) => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

    const onDelete = async () => {
        try {
            setIsLoading(true);

            await axios.delete(`/api/schedule/${appointmentId}`)

            toast.success("Запись удалена");
            router.refresh()
            router.push(`/admin/schedule/`)
        } catch {
            toast.error("Что-то пошло не так")
        } finally {
            setIsLoading(false);
        }
    }


    return (
            <Button size="inline" variant="destructive" disabled={isLoading} onClick={onDelete}>
                Удалить запись
            </Button>
    )
}