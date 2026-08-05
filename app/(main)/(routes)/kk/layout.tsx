import SiteFooterKk from "@/components/site-footer-kk";

// Главная: hero рендерится во всю ширину внутри page.tsx,
// остальной контент сам ограничен контейнером 1140px.
const RootGroupLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <SiteFooterKk />
        </>
    );
};

export default RootGroupLayout;
