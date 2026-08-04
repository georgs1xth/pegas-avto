import Navbar from "./_components/navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      default: "СТО Пегас avto A",
      template: "%s | СТО Пегас avto A",
    },
    other: { "google-site-verification": "YGfdW5HMTs0VsVfYZmKLqpQm2KfGiOQ5D3a0CUKYr8c"
    }
  };

const MainLayout = ({
    children
}: {
children : React.ReactNode
}) => {

    return (
        <div className="h-full">
            <div className="h-[60px] md:h-[80px] fixed inset-y-0 w-full z-50" >
                <Navbar />
            </div>
            <main className="pt-[60px] md:pt-[80px] h-full">
                {children}
            </main>
        </div>
    )
}

export default MainLayout;
