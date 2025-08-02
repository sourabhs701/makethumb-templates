import { Card, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface FeatureCardProps {
    title: string;
    description: string;
    icon: LucideIcon;
}

export function FeatureCard({ title, description, icon: Icon }: FeatureCardProps) {
    return (
        <Card className="relative overflow-hidden bg-card hover:bg-accent/50 transition-all duration-300 group hover:scale-105">
            <CardContent className="relative p-8">
                <div className="flex flex-col items-center text-center space-y-4">
                    <div className="p-4 bg-primary rounded-2xl text-primary-foreground shadow-lg group-hover:shadow-xl transition-all duration-300">
                        <Icon className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{description}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}