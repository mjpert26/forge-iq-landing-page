import type { Metadata, Viewport } from "next";
import { Barlow_Condensed, Montserrat, Source_Sans_3 } from "next/font/google";
import { siteConfig } from "@/config/site";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});
const sourceSans = Source_Sans_3({
  weight: ["400", "600"],
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});
const barlow = Barlow_Condensed({
  weight: ["600", "700"],
  subsets: ["latin"],
  variable: "--font-barlow",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: siteConfig.title,
  description: siteConfig.description,
  applicationName: siteConfig.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A1628",
  colorScheme: "light",
  viewportFit: "cover",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${montserrat.variable} ${sourceSans.variable} ${barlow.variable}`}>
      <body>{children}</body>
    </html>
  );
}
