
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
        <header className="relative z-50 w-full shrink-0">
            <Header />
        </header>

        {/* Main */}
        <main className="w-full flex-1">
            {children}
        </main>

        {/* Footer */}
        <footer className="relative z-10 w-full shrink-0">
            <Footer />
        </footer>

        </body>
        </html>
    );
}
