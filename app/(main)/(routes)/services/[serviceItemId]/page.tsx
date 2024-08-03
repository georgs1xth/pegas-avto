import CallUs from "@/components/call-us"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Button } from "@/components/ui/button"
import db from "@/lib/db"
import Image from "next/image"
import { redirect } from "next/navigation"

const CatalogItemPage = async ({
  params,
}: {
  params: {serviceItemId: string},
}) => {

  const item = await db.serviceItem.findUnique({
    where: {
      id: params.serviceItemId
    }
  })

  if(!item){
    return redirect(`/services/`)
  }

  return (
    <div className="flex flex-col md:flex-row p-2 gap-4">
        <div className="rounded-3xl overflow-hidden shadow-lg md:w-[40%]">
            <AspectRatio ratio={18 / 9}>
                <Image src={item.imageSrc!} alt={item.title} layout="fill" objectFit="cover"/>
            </AspectRatio>
        </div>
        <div className="flex flex-col text-start px-2 gap-2">
            <h2 className="text-lg">
                {item.title}
            </h2>
            <p className="text-sm px-2">
                {item.description}
            </p>
        </div>
        <div className="p-2">
            <CallUs variant="servicesPage"/>
        </div>
    </div>
  )
}

export default CatalogItemPage