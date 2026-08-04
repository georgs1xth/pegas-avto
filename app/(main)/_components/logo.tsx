import Image from "next/image";

export const Logo = () => {
    return(
        <h2 className="text-xl md:text-2xl xl:text-3xl flex gap-[1.5px] relative p-2 whitespace-nowrap">
            <span className="font-bold tracking-tight">ПЕГАС</span>
            <span className="text-yellow-600/70 font-semibold">avto</span>
            <span className="text-red-700 font-medium">A</span>
        </h2>
    )
}