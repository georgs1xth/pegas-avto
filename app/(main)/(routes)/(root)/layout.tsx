import SiteFooter from "@/components/site-footer";

// Футер на главной странице
const RootGroupLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <SiteFooter />
        </>
    );
};

export default RootGroupLayout;
