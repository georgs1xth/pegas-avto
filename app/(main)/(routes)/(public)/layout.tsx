import SiteFooter from "@/components/site-footer";

// Футер только для публичных страниц (админка и запись — без него)
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <SiteFooter />
        </>
    );
};

export default PublicLayout;
