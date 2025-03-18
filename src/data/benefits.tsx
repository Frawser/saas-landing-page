import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "AI-Driven Financial Planning",
        description: "Empower your business with intelligent financial strategies. AIBank’s AI analyzes your cash flow, spending patterns, and market trends to provide real-time, actionable insights.",
        bullets: [
            {
                title: "Automated Budget Optimization",
                description: "AI-powered analysis helps maximize efficiency and cut unnecessary costs.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Goal-Oriented Planning",
                description: "Set ambitious financial goals and let AI create a roadmap to success.",
                icon: <FiTarget size={26} />
            },
            {
                title: "Predictive Market Insights",
                description: "Stay ahead of market fluctuations with AI-driven forecasts and alerts.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
    {
        title: "AI-Powered Investing",
        description: "Take the guesswork out of investing. AIBank leverages machine learning to identify high-potential investments, helping you grow wealth with confidence.",
        bullets: [
            {
                title: "Smart Portfolio Management",
                description: "AI curates diversified portfolios based on real-time market data.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "AI-Driven Risk Assessment",
                description: "Understand potential risks and returns before making an investment.",
                icon: <FiPieChart size={26} />
            },
            {
                title: "Automated Micro-Investing",
                description: "Let AI invest spare change from transactions into high-yield opportunities.",
                icon: <FiDollarSign size={26} />
            }
        ],
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Next-Gen Fraud Detection & Security",
        description: "Your financial safety is our top priority. AIBank's AI security engine detects and neutralizes fraudulent activities in real-time.",
        bullets: [
            {
                title: "AI-Enhanced Fraud Prevention",
                description: "Machine learning continuously scans transactions to flag anomalies instantly.",
                icon: <FiShield size={26} />
            },
            {
                title: "Military-Grade Encryption",
                description: "All data is secured with the highest level of encryption protocols.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric & AI Identity Verification",
                description: "Advanced facial and fingerprint recognition ensures only you have access.",
                icon: <FiUser size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
