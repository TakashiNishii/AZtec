import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Footer from "./components/Footer";
import { Header } from "./components";
import WhatsappButton from "./components/WhatsappButton";
import Head from "next/head";

const montserrat = Montserrat({ subsets: ["latin"], weight: "300" });


export const metadata: Metadata = {
  title: "AZtec",
  description: "Soluções integradas de engenharia e manutenção agroindustrial",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aztec.ind.br",
    siteName: "AZtec",
    title: "AZtec",
    description: "Soluções integradas de engenharia e manutenção agroindustrial",
    images: [
      {
        url: "https://www.aztec.ind.br/images/LogoMetadata.png",
        width: 1600,
        height: 900,
        alt: "AZtec Logo",
      },
    ],
  },
  icons: [
    {
      url: "/favicon.ico",
      rel: "icon",
      type: "image/x-icon",
    },
  ],

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <script async src={`https://maps.googleapis.com/maps/api/js?key=${process.env.Google_API_Key}&callback=console.debug&libraries=maps,marker&v=beta`}>
        </script>
        <meta name="google-site-verification" content="cj-_0KfSUoaGPQ747x6MWuOHI21yZs5vuDpGAJYiMYg" />
      </Head>
      <body
        className={`${montserrat.className} min-h-dvh bg-secondary antialiased`}
      >

        <Header />
        {children}
        <WhatsappButton />
        <Footer />
      </body>
    </html>
  );
}
