import { AspectRatio } from "@/components/ui/aspect-ratio"
import db from "@/lib/db"
import Image from "next/image"
import { redirect } from "next/navigation"

const CatalogItemPage = async ({
  params,
}: {
  params: {category: string, catalogItemId: string},
}) => {

  const item = await db.catalogItem.findUnique({
    where: {
      id: params.catalogItemId
    },
    include: {
      imageSrcs: true
    }
  })

  if(!item){
    return redirect(`/catalog/${params.category}`)
  }

  for (let i = 0; i < item.imageSrcs.length; i++){
    console.log(`image number ${i + 1}`)
  }

  return (
    <div>
      {/* for (let i = 0; i < item.imageSrcs.length; i++){
        console.log("")
      } */}
      <AspectRatio ratio={16 / 12}>
        <Image src={item.imageSrcs[0].imageSrc!} alt="" fill />
      </AspectRatio>
    </div>
  )
}

export default CatalogItemPage