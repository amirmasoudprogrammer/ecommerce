import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";
import Header from "@/shared/components/Layout/Header";
import Footer from "@/shared/components/Layout/Footer";

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Your online shopping destination",
};

export default function RootLayout({children,}: { children: ReactNode }) {
    return (
        <html lang="en" className="h-full antialiased">
        <body className="flex min-h-screen flex-col">
        <Header />

        <main className="flex-1">
            {children}
        </main>

        <Footer />
        </body>
        </html>
    );
}