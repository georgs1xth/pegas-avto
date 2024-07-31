import db from "@/lib/db";
import ServiceItemCrad from "./_components/service-item-card";

const ServicesPage = async () => {
    
    const servicesItems = await db.serviceItem.findMany({
        where: {
            isPublished: true,
        },
        orderBy: {
            title: "asc"
        }
    });

    servicesItems.push({        id: "1",
                                title: "Компьютерная диагностика",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
                                isPublished: true,
    },{                         id: "2",
                                title: "Компьютерная диагностика",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
                                isPublished: true,
    },{                         id: "3",
                                title: "Компьютерная диагностика",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
                                isPublished: true,
    },{                         id: "4",
                                title: "Компьютерная диагностика",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
                                isPublished: true,
    },{                         id: "5",
                                title: "Компьютерная диагностика",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания.",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/3c63cf80-6fcc-4d80-a44a-d4bad1d083b5-749o2n.webp",
                                isPublished: true,
    })
    
    return ( 
        <div className="p-2 md:p-4 grid lg:grid-cols-2 gap-2 md:gap-3">
            {servicesItems.map((item) => (
                <ServiceItemCrad
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    description={item.description!}
                    price={item.price!}
                    imageSrc={item.imageSrc!}
                />
            ))

            }
        </div>
     );
}
 
export default ServicesPage;