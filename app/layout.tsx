
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import Header from "@/shared/components/Layout/Header/Header";
import Footer from "@/shared/components/Layout/footer/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import {Toaster} from "sonner";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
    title: "Ecommerce",
    description: "Your online shopping destination",
};

export default function RootLayout({children,}: { children: ReactNode; }) {
    return (
        <html lang="en" className={cn("min-h-full", "font-sans", geist.variable)}>
        <body className="flex min-h-screen flex-col bg-white">

        {/* Header */}
        <div className="relative z-50 w-full shrink-0">
            <Header />
        </div>

        {/* Main */}
        <main className="w-full flex-1 ">
            {children}

        </main>

        {/* Footer */}
        <div className="relative z-10 w-full shrink-0">
            <Footer />
        </div>
        <Toaster
            position="top-center"
            richColors
            closeButton
            duration={3000}
        />
        </body>
        </html>
    );
}
