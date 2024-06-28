const AdminLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    return (
        <div className="p-2 md:p-4 lg:p-6">
            {children}
        </div>
      );
}
 
export default AdminLayout;