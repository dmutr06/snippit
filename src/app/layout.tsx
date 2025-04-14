import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { House, Plus } from "lucide-react";
import MenuIcon from "@/components/ui/MenuIcon";
import Link from "next/link";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Snippit",
};

export default async function RootLayout({
    children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen`}
            >
                <div className="flex gap-2 w-full h-full mx-auto p-4">
                    <div className="h-full w-16 py-2 bg-gray-200/10 rounded-xl">
                        <ul className="flex flex-col gap-2">
                            <li><Link href="/"><MenuIcon icon={House} /></Link></li>
                            <li><Link href="/new"><MenuIcon icon={Plus} /></Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 w-full h-full">
                        <Header />
                        <main className="h-full w-full bg-gray-200/10 rounded-xl">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
