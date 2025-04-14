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
                className={`${geistSans.variable} ${geistMono.variable} antialiased h-screen bg-primary-400 text-fg`}
            >
                <div className="flex gap-2 w-full h-full mx-auto p-4">
                    <div className="flex flex-col justify-center">
                        <ul className="flex flex-col gap-2 w-16 py-2 bg-primary-200 rounded-xl">
                            <li><Link href="/snippets"><MenuIcon icon={House} /></Link></li>
                            <li><Link href="/snippets/new"><MenuIcon icon={Plus} /></Link></li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-2 w-full h-full min-h-0">
                        <Header />
                        <main className="flex-1 overflow-hidden w-full bg-primary-200 rounded-xl">{children}</main>
                    </div>
                </div>
            </body>
        </html>
    );
}
