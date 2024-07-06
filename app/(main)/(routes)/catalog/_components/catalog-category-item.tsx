"use client";

import { AspectRatio } from '@/components/ui/aspect-ratio';
import { cn } from '@/lib/utils';
import { CameraOff } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'

interface CatalogCategoryItemProps {
    imageSrc?: string;
    value: string;
    label: string;
    webRef: string;
}

const CatalogCategoryItem = ({
    label,
    value,
    imageSrc,
    webRef,
} : CatalogCategoryItemProps) => {

    const router = useRouter();

    const onClick = () => {
        router.push(`/catalog/categories/${webRef}`)

}


  return (
    <button className={cn('overflow-hidden p-2 flex flex-col items-center divide-y gap-2 md:gap-4')} onClick={onClick}>
        <AspectRatio ratio={4 / 3} className="rounded-sm overflow-hidden">
            {!!imageSrc ? <Image fill src={imageSrc} alt={label}/> : <CameraOff/>}
        </AspectRatio>
        <p className={cn('text-slate-900/90 text-sm md:text-base truncate',
        )}>{label}</p>
    </button>
  )
}

export default CatalogCategoryItem