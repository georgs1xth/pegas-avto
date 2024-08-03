import { Category } from "@prisma/client"
import CatalogCategoryItem from "./catalog-category-item";

interface CatalogCategoriesProps {
  items: Category[];
}

const CatalogCategories = ({
  items,
}: CatalogCategoriesProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
      {items.map((item) => (
        <CatalogCategoryItem
          key={item.id}
          imageSrc={item.imageSrc!}
          value={item.id}
          label={item.name}
          webRef={item.webRef!}
          isAdmin={false}
        />
      ))

      }
    </div>
  )
}

export default CatalogCategories