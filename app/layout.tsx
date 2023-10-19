import "./globals.css";
import type { Metadata } from "next";
import { raleway, merriweather, leagueSpartan } from "./fonts";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Denis Kuznetsov | Frontend Developer",
    description: "I build sites with modern technics",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            className={`scroll-smooth md:scroll-pt-20 ${raleway.variable} ${merriweather.variable} ${leagueSpartan.variable} font-serif`}
            lang="ru"
        >
            <body
                className={`pb-16 sm:pb-24 pt-14 md:pt-20  min-h-screen p-0 relative text-almostBlack text-lg first-letter:uppercase`}
            >
            <Header />
                {children}
            <Footer />
            </body>
        </html>
    );
}
