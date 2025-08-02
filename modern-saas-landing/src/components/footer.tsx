import { DATA } from "@/data/saas";
import { Link } from "react-router-dom";
import { Zap } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <Link to="/" className="flex items-center space-x-3">
                            <div className="p-2 bg-primary rounded-lg">
                                <Zap className="h-6 w-6 text-primary-foreground" />
                            </div>
                            <span className="text-2xl font-bold text-foreground">
                                {DATA.company}
                            </span>
                        </Link>
                        <p className="text-muted-foreground leading-relaxed">
                            {DATA.description}
                        </p>
                        <div className="flex space-x-4">
                            {Object.entries(DATA.contact.social)
                                .filter(([_, social]) => social.navbar)
                                .map(([name, social]) => (
                                    <a
                                        key={name}
                                        href={social.url}
                                        className="text-muted-foreground hover:text-foreground transition-colors"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <social.icon className="h-5 w-5" />
                                    </a>
                                ))}
                        </div>
                    </div>

                    {/* Product */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Product</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                            <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Integrations</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">API</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Company</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Press</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="font-semibold mb-4 text-foreground">Support</h3>
                        <ul className="space-y-3 text-muted-foreground">
                            <li><a href="#" className="hover:text-foreground transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Documentation</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-foreground transition-colors">Status</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-muted-foreground text-sm">
                        © 2024 {DATA.company}. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Privacy Policy</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Terms of Service</a>
                        <a href="#" className="text-muted-foreground hover:text-foreground text-sm transition-colors">Cookie Policy</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}