import Sidebar from "@/app/(main)/_components/sidebar";

export const metadata = {
    title: "Запись"
}

const EmployeeLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    return (
        <div className="h-full">
            <div className="hidden md:flex h-full md:w-56 flex-col fixed inset-y-0 z-40 pt-[80px] border-r shadow-lg dark:shadow-accent">
                <Sidebar />
            </div>
            <div className="md:pl-56 h-full">
                {children}
            </div>
        </div>
      );
}

export default EmployeeLayout;
