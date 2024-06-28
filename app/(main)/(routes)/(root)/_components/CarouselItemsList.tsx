import { MainCarouselItem} from "@prisma/client"
import CarouselItems from "./CarouselItems"


interface CarouselItemsListProps {
    items: MainCarouselItem[]
}

const CarouselItemsList = ({
    items
}: CarouselItemsListProps) => {
  return (
    <div>
        {items.map((item) => (
            <CarouselItems 
                key={item.id}
                imageSrc={item.imageUrl} 
                imageAlt={item.title}
                btnHref={item.btnHref} 
                itemTitle={item.title} 
                itemDescription={item.description}
        />
        ))}
    </div>
  )
}

export default CarouselItemsList