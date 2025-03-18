import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "Revolutionizing finance with AI-driven banking, smart investments, and real-time fraud protection.",
    quickLinks: [
        {
            text: "AI Features",
            url: "#features"
        },
        {
            text: "Security",
            url: "#security"
        },
        {
            text: "Investment Insights",
            url: "#investments"
        }
    ],
    email: 'support@aibank.com',
    telephone: '+1 (800) AI-BANK-1',
    socials: {
        twitter: 'https://twitter.com/AIBank',
        facebook: 'https://facebook.com/AIBank',
        linkedin: 'https://www.linkedin.com/company/aibank',
        instagram: 'https://www.instagram.com/AIBankOfficial',
    }
}
