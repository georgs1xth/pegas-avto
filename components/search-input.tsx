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

    const searchParams = useSearchParams();

    const router = useRouter();
    const pathname = usePathname();

    // const currentCategoryId = searchParams.get("categoryId");


    // const s = pathname.split('?')[1];
    // const queryParams = qs.parse(queryString);

    const sort = searchParams.get("sort")


    // console.log(pathname)

    useEffect(() => {
        const url = qs.stringifyUrl({
            url: pathname,
            query: {
                title: debouncedValue,
                sort: sort,
            }
        }, {skipEmptyString: true, skipNull: true});

        router.push(url);
    }, [debouncedValue, router, pathname])

    // currentCategoryId,

    return (
        <Suspense>
            <div className="relative">
                <Search
                    className="h-4 w-4 absolute top-3 left-3 text-accent-foreground"
                />
                <Input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    className="w-full md:w-[300px] pl-9 rounded-full bg-accent/40 focus-visible:ring-accent-foreground"
                    placeholder="Поиск товаров"
                />
            </div>
        </Suspense>
    )
}