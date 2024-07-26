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
    isAdmin?: boolean;
}

const CatalogCategoryItem = ({
    label,
    value,
    imageSrc,
    webRef,
    isAdmin
} : CatalogCategoryItemProps) => {

    const router = useRouter();

    const href = !!isAdmin ? `/admin/catalog/categories/${value}` : `/catalog/${webRef}` 

    const onClick = () => {
        router.push(href)

}


  return (
    <button className={cn('overflow-hidden p-2 flex flex-col items-center divide-y gap-2 md:gap-4 hover:bg-slate-100 transition-all hover:rounded-lg active:bg-green-800/10')} onClick={onClick}>
        <AspectRatio ratio={16 / 12} className="rounded-sm overflow-hidden flex justify-center items-center">
            {!!imageSrc ? <Image fill src={imageSrc} alt={label} loading='eager'/> : <CameraOff className='h-20 w-20' strokeWidth="1"/>}
        </AspectRatio>
        <p className={cn('text-slate-900/90 text-sm md:text-base truncate',
        )}>{label}</p>
    </button>
  )
}

export default CatalogCategoryItem