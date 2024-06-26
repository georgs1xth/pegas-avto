import { SearchInput } from "@/components/search-input";

const CatalogPage = () => {
    return ( 
        <div className="p-2 py-4 md:p-4 xl:p-6 flex flex-col gap-y-4">
            <div className="px-2 md:hidden">
                <SearchInput/>
            </div>
        </div>
     );
}
 
export default CatalogPage;