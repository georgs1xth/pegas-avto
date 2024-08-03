import React from 'react'

interface CallUsProps {
    variant: "servicesPage" | undefined
}

const CallUs = ({
    variant, 
}:  CallUsProps
) => {
  
    return (
    <div className='flex flex-col gap-2'>
        <h2 className="text-lg">
            Связаться с нами:
        </h2>
        <div className='flex flex-col gap-2'>
            <a href={`tel:${87023923222}`} className="flex gap-2 items-center hover:bg-slate-200 transition pt-2 pb-3 pr-4 pl-2 rounded-xl bg-accent-foreground/10">
                <h3 className="text-md text-slate-800">Влад:</h3>
                <p>
                    +7 702 392 3222
                </p>
            </a>
            <a href={`tel:${87058707885}`} className="flex gap-2 items-center hover:bg-slate-200 transition pt-2 pb-3 pr-4 pl-2 rounded-xl bg-accent-foreground/10">
                <h3 className="text-md text-slate-800">Макс:</h3>
                <p>
                    +7 705 870 7885
                </p>
            </a>
        </div>
    </div>
  )
}

export default CallUs