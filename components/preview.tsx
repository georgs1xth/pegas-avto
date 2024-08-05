"use client";

import { Activity } from "lucide-react";
import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.bubble.css";

interface PreviewProps {
    value: string;
};


export const Preview = ({
    value
}: PreviewProps) => {
    const ReactQuill = useMemo(() => dynamic(() => import("react-quill"), { ssr: false, loading: () => <p className="flex gap-2 text-base font-base"><Activity strokeWidth={2}/>Загрузка...</p>, } ), [])

    return (
            <ReactQuill 
            theme="bubble"
            value={value}
            readOnly
            />
    );
};