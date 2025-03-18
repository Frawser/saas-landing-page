import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `Is ${siteDetails.siteName} secure?`,
        answer: 'Absolutely. AIBank uses military-grade encryption, AI-driven fraud detection, and biometric authentication to ensure your financial data is fully protected.',
    },
    {
        question: `Can I use ${siteDetails.siteName} on multiple devices?`,
        answer: 'Yes! AIBank seamlessly syncs across your smartphone, tablet, and desktop, so you can access your finances anytime, anywhere.',
    },
    {
        question: 'Can I connect all my bank accounts?',
        answer: `Yes! ${siteDetails.siteName} integrates with thousands of financial institutions worldwide, allowing you to manage all your accounts from one AI-powered dashboard.`
    },
    {
        question: 'Do I need financial expertise to use the AI investment features?',
        answer: 'Not at all! AIBank’s AI-driven investment engine provides personalized portfolio recommendations, risk analysis, and real-time insights—making investing effortless for everyone.'
    },
    {
        question: 'What if I need help using the platform?',
        answer: 'Our AI-powered support assistant is available 24/7 to guide you. Plus, our expert support team is just a message away via chat or email, ensuring you get the assistance you need.'
    }
];
