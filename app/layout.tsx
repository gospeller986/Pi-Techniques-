import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavbarComponent } from "@/components/Navbar";
import Footer from "@/components/Footer";
import { NewsLetterComponent } from "@/components/NewsLetterComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pi Techniques Pvt. Ltd",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-black" >
      <body className={inter.className}>
        <NavbarComponent/>
        {children}
        <NewsLetterComponent/>
        <Footer/>
        </body>
    </html>
  );
}
