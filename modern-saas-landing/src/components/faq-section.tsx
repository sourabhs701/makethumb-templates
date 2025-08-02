import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { DATA } from "@/data/saas";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
    return (
        <Card className="bg-card hover:bg-accent/50 transition-colors duration-300">
            <CardContent className="p-0">
                <button
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-accent/30 transition-colors duration-200"
                    onClick={onToggle}
                >
                    <h3 className="text-lg font-semibold pr-4 text-foreground">{question}</h3>
                    {isOpen ? (
                        <ChevronUp className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    ) : (
                        <ChevronDown className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                    )}
                </button>
                {isOpen && (
                    <div className="px-6 pb-6">
                        <p className="text-muted-foreground leading-relaxed">{answer}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}

export default function FAQSection() {
    const [openItems, setOpenItems] = useState<number[]>([]);

    const toggleItem = (index: number) => {
        setOpenItems(prev =>
            prev.includes(index)
                ? prev.filter(i => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section id="faq" className="py-24 bg-muted/30">
            <div className="max-w-4xl mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl mb-4 text-foreground">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Get answers to common questions about FlowCast and how it can help your team
                    </p>
                </div>

                <div className="space-y-4">
                    {DATA.faq.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openItems.includes(index)}
                            onToggle={() => toggleItem(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}