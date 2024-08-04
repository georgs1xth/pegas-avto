import CallUs from "@/components/call-us"
import { Preview } from "@/components/preview"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb"
import db from "@/lib/db"
import Image from "next/image"
import { redirect } from "next/navigation"

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { Metadata, ResolvingMetadata } from "next"



export async function generateMetadata({
    params,
 }: {
    params: {serviceItemId: string}},
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = params.serviceItemId
   
    // fetch data
    const item = await db.serviceItem.findUnique({
        where: {
            id
        }
    })

    if(!item){
        return redirect(`/services`)
    }

    return {
      title: item.title,
      description: item.description,
    }
  }

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
    return redirect(`/services`)
  }

  return (
    <div className="flex flex-col p-2 gap-4 md:px-12 md:pt-14 lg:px-28">
        <div className="pt-2 pl-2">
                <Breadcrumb>
                    <BreadcrumbList>
                        
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/">Главная</BreadcrumbLink>
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                        
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/services">Все услуги</BreadcrumbLink>
                            </BreadcrumbItem>
                        
                        <BreadcrumbSeparator />
                            
                            <BreadcrumbItem>
                                <BreadcrumbPage>{item.title}</BreadcrumbPage>
                            </BreadcrumbItem>

                </BreadcrumbList>
            </Breadcrumb>
        </div>
        <div className="rounded-3xl overflow-hidden shadow-lg md:max-w-2xl">
            <AspectRatio ratio={18 / 9}>
                <Image src={item.imageSrc!} alt={item.title} style={{ objectFit: 'cover' }} fill/>
            </AspectRatio>
        </div>
        <div className="flex flex-col text-start px-2 gap-2">
            <h2 className="text-lg">
                {item.title}
            </h2>
            <h3 className="text-2xl font-medium">
                {!!item.price ? <>От {item.price} тг</> : <>Цена обговаривается</>}
            </h3>
            <p className="text-sm px-2">
                {item.description}
            </p>
        </div>
        {!!item.moreDescription ? 
        <Accordion type="single" collapsible className="px-2">
            <AccordionItem value="item-1">
                <AccordionTrigger className="text-lg">Подробнее</AccordionTrigger>
                <AccordionContent>
                    <Preview 
                        value={item.moreDescription}
                    />
                </AccordionContent>
            </AccordionItem>
        </Accordion>: null}
        <div className="p-2">
            <CallUs variant="servicesPage"/>
        </div>
    </div>
  )
}

export default CatalogItemPage