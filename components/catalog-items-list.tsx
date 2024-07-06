// import { CatalogItem, Category } from "@prisma/client";
// import { CatalogItemCard } from "@/components/catalog-item-card";

// type CatalogItemWithCategory = CatalogItem & {
//     category: Category | null;
// }

// interface CatalogItemsListProps {
//     items: CatalogItemWithCategory[];
// }

// export const CatalogItemsList = ({
//     items
// }: CatalogItemsListProps) => {
//     return (
//         <div>
//             <div className="grid gap-4 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
//                 {items.map((CatalogItem) => (
//                     <CatalogItemCard
//                         key={CatalogItem.id}
//                         id={CatalogItem.id}
//                         imageSrc={CatalogItem.imageSrcs[0].id}
//                         title={CatalogItem.title}
//                         price={CatalogItem.Price!}
//                         isAvailable={CatalogItem.isAvailable}
//                         brandId={CatalogItem.brandId!}
//                         category={CatalogItem?.category?.name!}
//                     />
//                 ))}
//             </div>
//         </div>
//     )
// }