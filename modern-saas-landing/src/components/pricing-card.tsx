import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { CheckIcon } from "lucide-react";

interface PricingCardProps {
    name: string;
    price: string;
    period: string;
    description: string;
    features: readonly string[];
    cta: string;
    popular?: boolean;
}

export function PricingCard({
    name,
    price,
    period,
    description,
    features,
    cta,
    popular = false,
}: PricingCardProps) {
    return (
        <Card className={`relative ${popular ? 'border-primary shadow-lg scale-105' : 'border-border'} hover:scale-105 transition-all duration-300 p-4`}>
            <CardHeader className="text-center space-y-4">
                <h3 className="text-2xl font-bold">{name}</h3>
                <div className="space-y-1">
                    <div className="text-4xl font-bold">
                        {price}
                        {price !== "Custom" && <span className="text-lg font-normal text-muted-foreground">/{period}</span>}
                    </div>
                    {price === "Custom" && <div className="text-sm text-muted-foreground">{period}</div>}
                </div>
                <p className="text-muted-foreground">{description}</p>
            </CardHeader>
            <CardContent className="space-y-6">
                <ul className="space-y-3">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-3">
                            <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                        </li>
                    ))}
                </ul>
                <Button
                    className="w-full"
                    variant={popular ? "default" : "outline"}
                    size="lg"
                >
                    {cta}
                </Button>
            </CardContent>
        </Card>
    );
}