import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Essential',
        price: 29,
        features: [
            'AI-powered budgeting tools',
            'Real-time fraud alerts',
            'Up to 5 linked bank accounts',
            'Standard encryption security',
            'Email support',
        ],
    },
    {
        name: 'Growth',
        price: 99,
        features: [
            'Automated investment insights',
            'Smart financial forecasting',
            'Up to 20 linked bank accounts',
            'Advanced AI fraud detection',
            'Priority email & phone support',
            'Detailed financial analytics',
        ],
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: [
            'AI-driven portfolio management',
            'Unlimited linked bank accounts',
            'Custom AI financial strategy',
            '24/7 dedicated support',
            'Enterprise-grade security',
            'Personalized on-site training',
        ],
    },
]
