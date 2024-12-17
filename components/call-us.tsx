import db from "@/lib/db"

interface CallUsProps {
    variant: "servicesPage" | undefined
    companyId: string | undefined
}

const CallUs = async ({
    variant,
    companyId 
}:  CallUsProps
) => {
  
    const company = await db.company.findUnique({
        where: {
            id: companyId
        }
    })

    if (company?.name == "Пегас avto A")
    {
        return (
        <div className='flex flex-col gap-2 md:max-w-xl'>
            <h2 className="text-lg md:text-base">
                Связаться с нами:
            </h2>
            <div className='flex flex-col gap-2'>
                <a href={`tel:${87023923222}`} className="flex gap-2 items-center hover:bg-accent transition pt-2 pb-3 pr-4 bg-accent-foreground/5 md:bg-background md:pt-1 md:pb-2 md:border-t">
                    <h3 className="text-md text-accent-foreground">Влад:</h3>
                    <p>
                        +7 702 392 3222
                    </p>
                </a>
                <a href={`tel:${87077050852}`} className="flex gap-2 items-center hover:bg-accent transition pt-2 pb-3 pr-4 bg-accent-foreground/5 md:bg-background md:pt-1 md:pb-2 md:border-t">
                    <h3 className="text-md text-accent-foreground">Георгий:</h3>
                    <p>
                        +7 707 705 0852
                    </p>
                </a>
            </div>
        </div>
        )
    }
    else
    {
        return (
            <div className='flex flex-col gap-2 md:max-w-xl'>
                <h2 className="text-lg md:text-base">
                    Связаться с нами:
                </h2>
                <div className='flex flex-col gap-2'>
                    <a href={`tel:${87010816666}`} className="flex gap-2 items-center hover:bg-accent transition pt-2 pb-3 pr-4 bg-accent-foreground/5 md:bg-background md:pt-1 md:pb-2 md:border-t">
                        <h3 className="text-md text-accent-foreground">Виталий:</h3>
                        <p>
                            +7 701 081 6666
                        </p>
                    </a>
                </div>
            </div>
        )
    }
}

export default CallUs