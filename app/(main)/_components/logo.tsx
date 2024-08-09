import Image from "next/image";

export const Logo = () => {
    return(
        <h2 className="text-xl flex gap-[1.5px] relative p-2">
            <span className="font-bold dark:text-yellow-500 tracking-tight">ПЕГАС</span>
            <span className="text-yellow-600/70 dark:text-white font-semibold">avto</span>
            <span className="text-red-700 font-medium">A</span>
        </h2>
    )
}