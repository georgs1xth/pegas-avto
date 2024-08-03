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
                                title: "Ремонт Автокондиционеров",
                                description: "Замена деталей автокондиционеров, установка и снятие новых деталей",
                                price: 0,
                                imageSrc: "https://utfs.io/f/44d821c2-d73e-4a5a-ae87-a86c08a033aa-y96f90.webp",
                                isPublished: true,
    },{                         id: "2",
                                title: "Заправка Автокондиционеров",
                                description: "Заправка автокондиционеров аппаратом TEXA 705R бельгийским фрионом со специальным маслом. Вакуумация аппаратом и проверка на утечки.",
                                price: 15000,
                                imageSrc: "https://utfs.io/f/2ad935ff-99f7-4931-8011-1634f9e23053-s2ulic.jpg",
                                isPublished: true,
    },{                         id: "3",
                                title: "Компьютерная диагностика",
                                description: "Компьютерная диагностика и сброс ошибок вашего авто. Устранение причин ошибок оплачивается отдельно.",
                                price: 5000,
                                imageSrc: "https://utfs.io/f/13cb707b-2c19-4555-bc0b-d528bec3a4d0-7blp55.webp",
                                isPublished: true,
    },{                         id: "4",
                                title: "Автоэлектрик",
                                description: "Устранение проблем с автоэлектрикой, установка и снятие дополнительного оборудования.",
                                price: 0,
                                imageSrc: "https://utfs.io/f/7f2f6b04-4e19-45a6-bc6b-2b02c896957b-we7a3k.webp",
                                isPublished: true,
    },{                         id: "5",
                                title: "Восстановление иммобилайзера",
                                description: "Описание компьютерной диагностики. Максимум два предложения для краткого описания.",
                                price: 0,
                                imageSrc: "https://utfs.io/f/95d84a58-696e-461d-8ab8-a76e13ff265e-agzucq.webp",
                                isPublished: true,
    },{                         id: "6",
                                title: "Установка автосигнализаций",
                                description: "Установка, настройка и деинсталляция автосигнализаций. Настройка гибкой логики для сигнализаций StarLine",
                                price: 0,
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