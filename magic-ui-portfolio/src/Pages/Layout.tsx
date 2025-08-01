// src/components/Layout.tsx
import React from "react";
import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import "@/index.css";
import { BrowserRouter } from "react-router-dom";
import { Helmet } from "react-helmet";
import { DATA } from "@/data/resume";

type LayoutProps = {
    children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <>
            <Helmet>
                <title>{DATA.name}</title>
                <meta name="description" content={DATA.description} />
                <link rel="icon" href="/favicon.ico" />
            </Helmet>

            <BrowserRouter>
                <div
                    className={cn(
                        "min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6"
                    )}
                >
                    <ThemeProvider>
                        <TooltipProvider delayDuration={0}>
                            {children}
                            <Navbar />
                        </TooltipProvider>
                    </ThemeProvider>
                </div>
            </BrowserRouter>
        </>
    );
};

export default Layout;
