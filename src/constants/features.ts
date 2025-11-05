import {
    ChartColumnBigIcon,
    DatabaseIcon,
    TrendingUpIcon,
    WandSparklesIcon,
    ZapIcon
} from "lucide-react";

export const FEATURES = [
    {
        title: "Modern Design System",
        description: "Built with Tailwind CSS and Shadcn UI components for a polished, professional look that's fully customizable",
        icon: WandSparklesIcon,
        image: "/images/feature-two.svg",
    },
    {
        title: "Responsive & Optimized",
        description: "Mobile-first design with lightning-fast performance. Optimized for all devices and screen sizes",
        icon: ChartColumnBigIcon,
        image: "/images/feature-one.svg",
    },
    {
        title: "Type-Safe Development",
        description: "Built with TypeScript and Next.js 15 for reliable, maintainable code with excellent developer experience",
        icon: DatabaseIcon,
        image: "/images/feature-three.svg",
    },
    {
        title: "Smooth Animations",
        description: "Powered by Framer Motion with beautiful micro-interactions and smooth page transitions out of the box",
        icon: TrendingUpIcon,
        image: "/images/feature-four.svg",
    },
    {
        title: "Production Ready",
        description: "Deploy in minutes to Vercel with built-in best practices, SEO optimization, and clean code architecture",
        icon: ZapIcon,
        image: "/images/feature-five.svg",
    }
]