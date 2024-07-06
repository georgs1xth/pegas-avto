import { CatalogItemCard } from "@/components/catalog-item-card";
import db from "@/lib/db";


const CategoryPage = async ({
    params
}: {
    params: {category: string}
}) => {

    const category = await db.category.findUnique({
        where: {
            webRef: params.category
        }
    })

    const items = await db.catalogItem.findMany({
        where: {
            categoryId: category?.id
        },
        orderBy: {
            isAvailable: "desc",
        }
    })
    
    items.push({id: "1",
                title: "Title",
                description: "Description",
                Price: 1,
                categoryId: "1",
                brandId: "1",
                isAvailable: true,
                isPublished: false,
                imageSrc: ""
    })
    
    items.push({id: "1",
                title: "Title",
                description: "Description",
                Price: 1,
                categoryId: "1",
                brandId: "1",
                isAvailable: true,
                isPublished: false,
                imageSrc: ""
    })

    items.push({id: "1",
                title: "Title",
                description: "Description",
                Price: 1,
                categoryId: "1",
                brandId: "1",
                isAvailable: true,
                isPublished: false,
                imageSrc: ""
    })

    items.push({id: "1",
                title: "Title",
                description: "Description",
                Price: 1,
                categoryId: "1",
                brandId: "1",
                isAvailable: true,
                isPublished: false,
                imageSrc: ""
    })

    return ( 
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
            {items.map((item) => (
                <CatalogItemCard
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    price={item.Price!}
                    imageSrc={item.imageSrc!}
                    isAvailable={item.isAvailable}
                    brandId={item.brandId!}
                    category={item.categoryId!}
                    // description={item.description}
                />
            ))}
        </div>
     );
}
 
export default CategoryPage;