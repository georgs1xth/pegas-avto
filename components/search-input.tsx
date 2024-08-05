"use client";

import qs from "query-string";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Suspense, useEffect, useState } from "react";
import { useDebounce } from "@/hooks/use-debounce";
import { useSearchParams, useRouter, usePathname } from "next/navigation";

export const SearchCatalog = () => {

    const [value, setValue] = useState("")
    const debouncedValue = useDebounce(value, 500);

    // const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();

    // const currentCategoryId = searchParams.get("categoryId");

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: debouncedValue,
            }
        }, {skipEmptyString: true, skipNull: true});

        router.push(url);
    }, [debouncedValue, router, pathname])

    // currentCategoryId,

    return (
        <Suspense>
            <div className="relative">
                <Search
                    className="h-4 w-4 absolute top-3 left-3 text-slate-600"
                />
                <Input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className="w-full md:w-[300px] pl-9 rounded-full bg-slate-100 focus-visible:ring-slate-200"
                    placeholder="Поиск товаров"
                />
            </div>
        </Suspense>
    )
}