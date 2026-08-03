import SiteFooter from "@/components/site-footer";

// Контейнер 1140px — как на kristall-auto.kz и на статичных страницах.
// Футер только для публичных страниц (админка и запись — без него).
const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <div className="mx-auto w-full max-w-[1140px] px-4">
                {children}
            </div>
            <SiteFooter />
        </>
    );
};

export default PublicLayout;
