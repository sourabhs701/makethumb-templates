import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/saas";
import { FeatureCard } from "@/components/feature-card";
import { StatCard } from "@/components/stat-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { PricingCard } from "@/components/pricing-card";
import FAQSection from "@/components/faq-section";

const BLUR_FADE_DELAY = 0.04;

export default function SaasLanding() {
    return (
        <main className="flex flex-col min-h-[100dvh]">
            {/* Hero Section */}
            <section id="hero" className="relative py-20 lg:py-32 overflow-hidden bg-muted/30">
                <div className="relative mx-auto max-w-5xl text-center space-y-8 px-4">
                    <BlurFadeText
                        delay={BLUR_FADE_DELAY}
                        className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none text-foreground"
                        yOffset={8}
                        text={DATA.hero.title}
                    />
                    <BlurFadeText
                        className="max-w-3xl mx-auto text-xl sm:text-2xl text-muted-foreground leading-relaxed"
                        delay={BLUR_FADE_DELAY * 2}
                        text={DATA.hero.subtitle}
                    />
                    <BlurFade delay={BLUR_FADE_DELAY * 3}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
                                {DATA.hero.ctaText}
                            </Button>
                            <Button size="lg" variant="outline" className="text-lg px-8 py-6 transition-all duration-300">
                                {DATA.hero.secondaryCtaText}
                            </Button>
                        </div>
                    </BlurFade>

                    {/* Trust indicators */}
                    <BlurFade delay={BLUR_FADE_DELAY * 4}>
                        <div className="pt-12">
                            <p className="text-sm text-muted-foreground mb-6">Trusted by leading companies worldwide</p>
                            <div className="flex justify-center items-center space-x-8 opacity-60">
                                <div className="text-2xl font-bold text-muted-foreground">TechFlow</div>
                                <div className="text-2xl font-bold text-muted-foreground">InnovateLab</div>
                                <div className="text-2xl font-bold text-muted-foreground">GrowthCorp</div>
                                <div className="text-2xl font-bold text-muted-foreground">StartupXYZ</div>
                            </div>
                        </div>
                    </BlurFade>
                </div>
            </section>


            {/* Features Section */}
            <section id="features" className="py-24 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 space-y-16">
                    <BlurFade delay={BLUR_FADE_DELAY * 7}>
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
                                Everything you need to succeed
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Powerful features designed to streamline your workflow and boost productivity across your entire organization
                            </p>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DATA.features.map((feature, id) => (
                            <BlurFade key={feature.title} delay={BLUR_FADE_DELAY * 8 + id * 0.1}>
                                <FeatureCard
                                    title={feature.title}
                                    description={feature.description}
                                    icon={feature.icon}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-24 bg-background">
                <div className="mx-auto max-w-7xl px-4 space-y-16">
                    <BlurFade delay={BLUR_FADE_DELAY * 9}>
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
                                Loved by teams worldwide
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Join thousands of teams who've transformed their productivity with FlowCast
                            </p>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {DATA.testimonials.map((testimonial, id) => (
                            <BlurFade key={testimonial.name} delay={BLUR_FADE_DELAY * 10 + id * 0.1}>
                                <TestimonialCard
                                    name={testimonial.name}
                                    role={testimonial.role}
                                    company={testimonial.company}
                                    avatar={testimonial.avatar}
                                    content={testimonial.content}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="py-24 bg-muted/50">
                <div className="mx-auto max-w-7xl px-4 space-y-16">
                    <BlurFade delay={BLUR_FADE_DELAY * 11}>
                        <div className="text-center space-y-4">
                            <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl text-foreground">
                                Simple, transparent pricing
                            </h2>
                            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                                Choose the perfect plan for your team. Start with a 14-day free trial, no credit card required.
                            </p>
                        </div>
                    </BlurFade>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {DATA.pricing.map((plan, id) => (
                            <BlurFade key={plan.name} delay={BLUR_FADE_DELAY * 12 + id * 0.1}>
                                <PricingCard
                                    name={plan.name}
                                    price={plan.price}
                                    period={plan.period}
                                    description={plan.description}
                                    features={plan.features}
                                    cta={plan.cta}
                                    popular={plan.popular}
                                />
                            </BlurFade>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
                <FAQSection />
            </BlurFade>

            {/* CTA Section */}
            <section id="cta" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
                <div className="relative mx-auto max-w-5xl text-center space-y-8 px-4">
                    <BlurFade delay={BLUR_FADE_DELAY * 14}>
                        <h2 className="text-4xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
                            Ready to transform your workflow?
                        </h2>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 15}>
                        <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto leading-relaxed">
                            Join thousands of teams already using FlowCast to boost their productivity and streamline their operations
                        </p>
                    </BlurFade>
                    <BlurFade delay={BLUR_FADE_DELAY * 16}>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
                                Start Free Trial
                            </Button>
                            <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-all duration-300">
                                Contact Us
                            </Button>
                        </div>
                    </BlurFade>
                </div>
            </section>
        </main>
    );
}