"use client";

import { usePathname } from "next/navigation";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Providers from "../../components/Providers";

import "../../styles/globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = usePathname();
  const hideBanner = router?.startsWith("/post/") ? false : true;
  return (
    <html>
      <body className="max-w-7xl mx-auto bg-[#F8F8F8] dark:bg-[#222] ">
        <Providers>
          <Header />
          {hideBanner && <Banner />}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
