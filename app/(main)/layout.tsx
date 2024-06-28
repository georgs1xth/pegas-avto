
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";

const MainLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    return (
        <div className="h-full">
            <div className="h-[80px] fixed inset-y-0 w-full z-50" >
                <Navbar />
            </div>
            <div className="hidden md:flex h-full md:w-56 xl:w-72 flex-col fixed inset-y-0 z-50 pt-[80px]">
                <Sidebar />
            </div>
            <main className="pt-[80px] h-full md:pl-56 xl:pl-72">
                {children}
            </main>
        </div>
      );
}
 
export default MainLayout;