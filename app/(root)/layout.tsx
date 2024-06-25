import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex flex-col">
        <main className="relative flex bg-black">
            <LeftSidebar />
            <section className="border-2 border-red-500 flex flex-1 flex-col px-4 sm:px-14">
              <div className="mx-auto flex w-full max-w-5xl flex-col">
                <div>
                  <Image />
                </div>
                <div>
                  toaster(notification popups)
                  {children}
                </div>
              </div>
            </section>
            <RightSidebar/>
        </main>
    </div>
  );
}
