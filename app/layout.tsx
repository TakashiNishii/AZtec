import type { Metadata } from "next";
import { Literata } from "next/font/google";
import "./globals.css";

const literata = Literata({ subsets: ["latin"], weight: "300" });


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
        className={`${literata.className} min-h-dvh bg-secondary antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
