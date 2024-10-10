import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Header } from "./components";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });


export const metadata: Metadata = {
  title: "AZtec",
  description: "Soluções integradas de engenharia e manutenção agroindustrial",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} min-h-dvh bg-secondary antialiased`}
      >

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
