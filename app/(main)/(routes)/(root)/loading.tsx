import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
    return (
        <div className="p-2 md:p-4 xl:p-6 flex flex-col gap-y-4"> 
            <div className="flex flex-row gap-4">
                <div className="basis-full md:grid md:basis-1/2 xl:basis-1/3 h-full">
                    <div className="h-full">
                        <Skeleton className="rounded-xl shadow-md h-full w-full overflow-hidden aspect-[15/9]"/>
                    </div>
                    <div className="flex flex-col justify-between md:min-h-[135px] max-h-max">
                        <div className="flex flex-col justify-center items-center text-center mt-3 md:mt-6 gap-2">
                            <Skeleton className="w-5/6 h-4 rounded-xl"/>
                            <Skeleton className="hidden md:block w-4/6 h-4 rounded-xl"/>
                            <Skeleton className="w-5/6 h-3 rounded-xl mt-2"/>
                        </div>
                        <Skeleton className="mt-4 hidden md:flex w-full h-10 rounded-2xl"/>
                    </div>
                </div>
                <div className="hidden basis-full md:grid md:basis-1/2 xl:basis-1/3 h-full">
                    <div className="h-full">
                        <Skeleton className="rounded-xl shadow-md h-full w-full overflow-hidden aspect-[15/9]"/>
                    </div>
                    <div className="flex flex-col justify-between md:min-h-[135px] max-h-max">
                        <div className="flex flex-col justify-center items-center text-center mt-6 gap-2">
                            <Skeleton className="w-5/6 h-4 rounded-xl"/>
                            <Skeleton className="w-4/6 h-4 rounded-xl"/>
                            <Skeleton className="w-5/6 h-3 rounded-xl mt-2"/>
                        </div>
                        <Skeleton className="mt-4 hidden md:flex w-full h-10 rounded-2xl"/>
                    </div>
                </div>
                <div className="hidden basis-full md:hidden xl:grid xl:basis-1/3 h-full">
                    <div className="h-full">
                        <Skeleton className="rounded-xl shadow-md h-full w-full overflow-hidden aspect-[15/9]"/>
                    </div>
                    <div className="flex flex-col justify-between md:min-h-[135px] max-h-max">
                        <div className="flex flex-col justify-center items-center text-center mt-6 gap-2">
                            <Skeleton className="w-5/6 h-4 rounded-xl"/>
                            <Skeleton className="w-4/6 h-4 rounded-xl"/>
                            <Skeleton className="w-5/6 h-3 rounded-xl mt-2"/>
                        </div>
                        <Skeleton className="mt-4 hidden md:flex w-full h-10 rounded-2xl"/>
                    </div>
                </div>
            </div>
            <div className="grid gap-3 md:gap-4 grid-cols-2 lg:grid-cols-4 p-2">
            <div className="border rounded-lg p-6 col-span-1 xs:col-span-2 shadow-md flex sm:col-span-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-start md:items-center md:flex-row gap-2 w-full mb-2">
                            <Skeleton className="h-6 w-6 p-5 rounded-xl"
                            />
                            <Skeleton className="w-32 h-4">
                            </Skeleton>
                        </div>
                        <Skeleton className="w-24 md:w-64 h-3"/>
                        <Skeleton className="w-20 md:w-48 h-3"/>
                    </div>
            </div>
            <div className="border rounded-lg p-6 col-span-1 xs:col-span-2 shadow-md flex sm:col-span-1">
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-start md:items-center md:flex-row gap-2 w-full mb-2">
                            <Skeleton className="h-6 w-6 p-5 rounded-xl"
                            />
                            <Skeleton className="w-32 h-4"/>
                        </div>
                        <Skeleton className="w-24 md:w-64 h-3"/>
                        <Skeleton className="w-20 md:w-48 h-3"/>
                    </div>
            </div>
                <div className="border rounded-lg p-6 col-span-1 xs:col-span-2 shadow-md flex sm:col-span-2"> 
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col items-start md:items-center md:flex-row gap-2 w-full mb-2">
                            <Skeleton className="h-6 w-6 p-5 rounded-xl"
                            />
                            <Skeleton className="w-32 h-4"/>
                        </div>
                        <Skeleton className="w-64 sm:w-72 md:w-96 h-3"/>
                        <Skeleton className=" w-48 sm:w-60 md:w-80 h-3"/>
                    </div>
                    {/* <InfoCardBtn/> */}
                </div>
                {/*
                <InfoCard
                icon={Handshake}
                label="Работаем с организациями"
                description="Мы предоставляем организациям полный пакет документов для бухгалтерии. Акты выполненных работ, cчета-фактуры и т.д. Всё профессионально и в срок."
                wideness="two"
                addButton
                btnHref="/partnership"
                /> */}
            </div>
            
        </div>
    )
}