import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
    name: string;
    role: string;
    company: string;
    avatar: string;
    content: string;
}

export function TestimonialCard({ name, role, company, avatar, content }: TestimonialCardProps) {
    return (
        <Card className="h-full relative overflow-hidden bg-card hover:bg-accent/50 transition-all duration-300 group hover:scale-105">
            <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300">
                <Quote className="h-8 w-8 text-primary" />
            </div>
            <CardContent className="p-8 space-y-6">
                <blockquote className="text-lg leading-relaxed text-foreground relative z-10">
                    "{content}"
                </blockquote>
                <div className="flex items-center space-x-4">
                    <Avatar className="h-12 w-12 ring-2 ring-primary/20">
                        <AvatarImage src={avatar} alt={name} />
                        <AvatarFallback className="bg-primary text-primary-foreground">
                            {name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold text-foreground">{name}</p>
                        <p className="text-sm text-muted-foreground">{role} at {company}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}