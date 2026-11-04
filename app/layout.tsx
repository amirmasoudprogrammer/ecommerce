
import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Header from "@/shared/components/Layout/Header/Header";
import Footer from "@/shared/components/Layout/footer/Footer";

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Your online shopping destination",
};

export default function RootLayout({children,}: { children: ReactNode; }) {
    return (
        <html lang="en" className="min-h-full">
        <body className="flex min-h-screen flex-col bg-white">

        {/* Header */}
        <div className="relative z-50 w-full shrink-0">
            <Header />
        </div>

        {/* Main */}
        <main className="w-full flex-1">
            {children}
        </main>

        {/* Footer */}
        <div className="relative z-10 w-full shrink-0">
            <Footer />
        </div>

        </body>
        </html>
    );
}
