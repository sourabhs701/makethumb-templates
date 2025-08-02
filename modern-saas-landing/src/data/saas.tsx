import { Icons } from "@/components/icons";
import { HomeIcon, Zap, Users, BarChart3, Shield, Link2, MessageCircle } from "lucide-react";

export const DATA = {
    company: "FlowCast",
    tagline: "Streamline Your Workflow",
    url: "https://flowcast.io",
    description:
        "The ultimate productivity platform for modern teams",
    hero: {
        title: "Streamline Your Workflow with FlowCast",
        subtitle: "Boost productivity, enhance collaboration, and automate your team's processes with our all-in-one platform.",
        ctaText: "Start Free Trial",
        ctaLink: "#pricing",
        secondaryCtaText: "Watch Demo",
        secondaryCtaLink: "#demo"
    },
    features: [
        {
            title: "Smart Automation",
            description: "Automate repetitive tasks and focus on what matters most",
            icon: Zap,
        },
        {
            title: "Real-time Collaboration",
            description: "Work together seamlessly with your team from anywhere",
            icon: Users,
        },
        {
            title: "Advanced Analytics",
            description: "Get insights into your team's productivity and performance",
            icon: BarChart3,
        },
        {
            title: "Enterprise Security",
            description: "Bank-level security to keep your data safe and compliant",
            icon: Shield,
        },
        {
            title: "Custom Integrations",
            description: "Connect with 1000+ apps and tools your team already uses",
            icon: Link2,
        },
        {
            title: "24/7 Support",
            description: "Get help whenever you need it with our dedicated support team",
            icon: MessageCircle,
        },
    ],
    pricing: [
        {
            name: "Starter",
            price: "$9",
            period: "month",
            description: "Perfect for small teams getting started",
            features: [
                "Up to 5 team members",
                "10GB storage",
                "Basic integrations",
                "Email support",
            ],
            cta: "Start Free Trial",
            popular: false,
        },
        {
            name: "Professional",
            price: "$19",
            period: "month",
            description: "Best for growing teams and businesses",
            features: [
                "Up to 50 team members",
                "100GB storage",
                "Advanced integrations",
                "Priority support",
                "Custom workflows",
            ],
            cta: "Start Free Trial",
            popular: true,
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "contact sales",
            description: "For large organizations with specific needs",
            features: [
                "Unlimited team members",
                "Unlimited storage",
                "Custom integrations",
                "Dedicated support",
                "SSO & advanced security",
                "Custom SLA",
            ],
            cta: "Contact Sales",
            popular: false,
        },
    ],
    testimonials: [
        {
            name: "Sarah Johnson",
            role: "Product Manager",
            company: "TechFlow",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            content: "FlowCast has completely transformed how our team works. We've increased our productivity by 40% since switching.",
        },
        {
            name: "Michael Chen",
            role: "Engineering Director",
            company: "InnovateLab",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            content: "The automation features saved us countless hours. It's like having an extra team member working 24/7.",
        },
        {
            name: "Emily Rodriguez",
            role: "Operations Lead",
            company: "GrowthCorp",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            content: "Amazing platform! The integrations work flawlessly and the support team is incredibly responsive.",
        },
    ],
    navbar: [
        { href: "/", icon: HomeIcon, label: "Home" }
    ],
    contact: {
        email: "hello@flowcast.io",
        phone: "+1 (555) 123-4567",
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/flowcast",
                icon: Icons.github,
                navbar: true,
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/flowcast",
                icon: Icons.linkedin,
                navbar: false,
            },
            X: {
                name: "X",
                url: "https://x.com/flowcast",
                icon: Icons.x,
                navbar: true,
            },
            email: {
                name: "Send Email",
                url: "mailto:hello@flowcast.io",
                icon: Icons.email,
                navbar: false,
            },
        },
    },
    faq: [
        {
            question: "How does FlowCast integrate with my existing tools?",
            answer: "FlowCast offers 500+ integrations with popular tools like Slack, Google Workspace, Microsoft 365, Trello, Asana, and many more. Our API also allows for custom integrations to fit your specific workflow needs."
        },
        {
            question: "Is my data secure with FlowCast?",
            answer: "Absolutely. We use bank-level encryption, SOC 2 Type II compliance, and follow industry best practices for data security. Your data is encrypted both in transit and at rest, and we never share your information with third parties."
        },
        {
            question: "Can I try FlowCast before committing to a paid plan?",
            answer: "Yes! We offer a 14-day free trial with full access to all Professional features. No credit card required to start your trial."
        },
        {
            question: "What kind of support do you provide?",
            answer: "We offer comprehensive support including email support for all plans, priority support for Professional plans, and dedicated support for Enterprise customers. We also have extensive documentation and video tutorials."
        },
        {
            question: "How easy is it to migrate from other tools?",
            answer: "Very easy! Our migration specialists will help you import your data and set up your workflows. Most customers are up and running within a few hours, and we provide dedicated support throughout the process."
        },
        {
            question: "Can I change or cancel my plan at any time?",
            answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect immediately, and we'll prorate any billing adjustments. No long-term contracts required."
        }
    ],
} as const;