import { CatalogItem, Category } from "@prisma/client";
import db from "@/lib/db";

type CatalogItemWithCategory = CatalogItem & {
    category: Category | null;
}

type GetCatalogItems = {
    title?: string;
    categoryId?: string;
}

export const getCatalogItems = async ({
    title,
    categoryId,
}: GetCatalogItems): Promise<CatalogItemWithCategory[]> => {
    try{
        const catalogItems = await db.catalogItem.findMany({
            where: {
                isPublished: true,
                title: {
                    contains: title,
                },
                categoryId,
            },
            include: {
                category: true,
            },
            orderBy: {
                title: "asc"
            }
        });

        const catalogItemsWithCategory: CatalogItemWithCategory[] = await Promise.all(
            catalogItems.map(async catalogItem => {
                return {
                    ...catalogItem
                }
            })
        )
        return catalogItemsWithCategory;
    } catch (error) {
        console.log("[GET_CATALOG_ITEMS]")
        return[];
    }
}