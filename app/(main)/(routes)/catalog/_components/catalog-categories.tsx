import { Category } from "@prisma/client"
import CatalogCategoryItem from "./catalog-category-item";

interface CatalogCategoriesProps {
  items: Category[];
}

const CatalogCategories = ({
  items,
}: CatalogCategoriesProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 md:divide-x">
      {items.map((item) => (
        <CatalogCategoryItem
          key={item.id}
          imageSrc={item.imageSrc!}
          value={item.id}
          label={item.name}
          webRef={item.webRef!}
        />
      ))

      }
    </div>
  )
}

export default CatalogCategories