"use client";


import qs from "query-string";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils';
import { Filter } from 'lucide-react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

interface FilterPriceProps {
    options: readonly{value: string, name: string}[]
}

const FilterPrice = ({
    options
}: FilterPriceProps) => {
    
  const [filter, setFilter] = useState({
    sort: 'none',
  })

  const router = useRouter();
  
  const pathname = usePathname();
  
  const searchParams = useSearchParams();

  const title = searchParams.get("title")

  useEffect(() => {
    const url = qs.stringifyUrl({
        url: pathname,
        query: {
            title,
            sort: filter.sort
        }
    }, {skipEmptyString: true, skipNull: true});

    router.push(url);
}, [filter, router, pathname])
    
  return (
    <div className="flex justify-end">
        <DropdownMenu>
            <DropdownMenuTrigger className="group inline-flex justify-center text-sm hover:text-accent-foreground/80 transition-colors duration-100 gap-1 border-accent-foreground/10 border p-2 rounded-lg">
                Сортировка
                <Filter className=" h-5 w-5 flex-shrink-0 text-accent-foreground group-hover:text-accent-foreground/80 transition-colors duration-100"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {options.map((option) => (
                    <button 
                        key={option.name} 
                        className={cn(
                            'text-left w-full block px-4 py-2 text-sm transition-all rounded-md', {
                                'bg-accent/100' : option.value === filter.sort
                            }
                        )}
                        onClick={() => {
                        setFilter(() => ({
                            sort: option.value,
                        }))
                    }}>{option.name}</button>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
  )
}

export default FilterPrice