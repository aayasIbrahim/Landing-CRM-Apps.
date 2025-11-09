import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ProvidersClient from "@/components/ProviderClient";
import NavClient from "@/components/NavClient";
import FooterClient from "@/components/FooterClient";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sass Landing page",
  description: "Creating by Coursefiction LTD;",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ProvidersClient>
          <NavClient />
          <main>{children}</main>
          <FooterClient />
        </ProvidersClient>
      </body>
    </html>
  );
}
