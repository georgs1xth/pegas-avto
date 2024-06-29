import { MainCarouselItem } from '@prisma/client'
import React from 'react'
import SlideOverview from './slide-overview'

interface SlidesOverviewProps {
    carouselItems: MainCarouselItem[]
}

const SlidesOverview = ({
    carouselItems
}: SlidesOverviewProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {carouselItems.map((item) => (
            <SlideOverview
                key={item.id}
                id={item.id}
                imageSrc={item.imageUrl!}
                imageAlt={item.title}
                btnHref={item.btnHref!}
                itemTitle={item.title}
                itemDescription={item.description!}
            />           
        ))}
    </div>
  )
}

export default SlidesOverview