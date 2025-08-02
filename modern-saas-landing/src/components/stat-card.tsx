import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
    number: string;
    label: string;
}

export function StatCard({ number, label }: StatCardProps) {
    return (
        <Card className="text-center border-0 bg-primary-foreground/10 backdrop-blur-sm hover:bg-primary-foreground/20 transition-all duration-300 group">
            <CardContent className="p-6">
                <div className="text-4xl font-bold text-primary-foreground mb-2 group-hover:scale-110 transition-transform duration-300">{number}</div>
                <div className="text-primary-foreground/80 font-medium">{label}</div>
            </CardContent>
        </Card>
    );
}