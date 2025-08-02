// src/components/Layout.tsx
import React from "react";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "@/index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DATA } from "@/data/saas";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>{DATA.company} - {DATA.tagline}</title>
                <meta name="description" content={DATA.description} />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <BrowserRouter>
                <div
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased w-full"
                    )}
                >
                    <ThemeProvider>
                        <TooltipProvider delayDuration={0}>
                            <Header />
                            {children}
                            <Footer />
                            <Navbar />
                        </TooltipProvider>
                    </ThemeProvider>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Layout;
