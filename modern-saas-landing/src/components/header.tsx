import { Button } from "@/components/ui/button";
import { DATA } from "@/data/saas";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between max-w-7xl mx-auto px-4">
                {/* Logo */}
                <Link to="/" className="flex items-center space-x-3">
                    <div className="p-2 bg-primary rounded-lg">
                        <Zap className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="text-2xl font-bold text-primary">
                        {DATA.company}
                    </span>
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    <a href="#features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Features
                    </a>
                    <a href="#testimonials" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Testimonials
                    </a>
                    <a href="#pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Pricing
                    </a>
                    <a href="#contact" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Contact
                    </a>
                </nav>

                {/* CTA Buttons */}
                <div className="flex items-center space-x-4">
                    <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
                        Sign In
                    </Button>
                    <Button size="sm">
                        Start Free Trial
                    </Button>
                </div>
            </div>
        </header>
    );
}