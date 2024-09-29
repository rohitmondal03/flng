import type { TNavLinks, TFeatures, TPricing } from "../lib/@types/root.types";
import { routes } from "./routes";


export const NAV_LINKS: TNavLinks[] = [
  {
    label: "Features",
    href: routes.features(),
  },
  {
    label: "Pricing",
    href: routes.pricing(),
  },
  {
    label: "Upload File",
    href: routes.uploadFiles(),
  },
  {
    label: "Dashboard",
    href: routes.dashboard(),
  }
]


export const FEATURES: TFeatures[] = [
  {
    title: "Secure File Sharing",
    description: "Keep your files safe with end-to-end encryption and advanced access controls.",
  },
  {
    title: "Powerful Analytics",
    description: "Track file activity, user engagement, and collaboration insights.",
  },
  {
    title: "Mobile Accessibility",
    description: "Access and share files on-the-go with our mobile-friendly website.",
  },
  {
    title: "Scalable Storage",
    description: "Expand your storage as your business grows with our flexible plans.",
  },
  {
    title: "Robust Security",
    description: "Protect your data with industry-leading security measures and compliance.",
  },
  {
    title: "Dedicated Support",
    description: "Get personalized support from our team of experts whenever you need it.",
  },
  // {
  //   title: "Real-Time Collaboration",
  //   description: "Collaborate on files in real-time with your team and clients.",
  // },
  // {
  //   title: "Seamless Integration",
  //   description: "Integrate FileShare with your existing tools and workflows.",
  // },
  // {
  //   title: "Automated Workflows",
  //   description: "Streamline your file management with automated workflows and triggers.",
  // },
]


export const PRICING: TPricing[] = [
  {
    title: "Free",
    description: "For individuals and small teams getting started.",
    price: "Free",
    features: [
      "2 GB storage",
      "10 file uploads",
      "Secure file sharing",
      // "Standard support",
    ],
  },
  {
    title: "Basic",
    description: "Perfect for individuals and small teams.",
    price: 9,
    features: [
      "5 GB storage",
      "Unlimited file uploads",
      "Secure file sharing",
      "Standard support",
    ],
  },
  {
    title: "Pro",
    description: "Ideal for growing businesses and teams.",
    price: 19,
    features: [
      "10 GB storage",
      "Unlimited file uploads",
      "Analytics and reporting",
      "Secure file sharing",
      "Priority support",
    ],
  },
  // {
  //   title: "Enterprise",
  //   description: "Tailored for large teams and organizations.",
  //   price: "Contact Us",
  //   features: [
  //     "Unlimited storage",
  //     "Unlimited file uploads",
  //     "Dedicated account management",
  //     "Analytical insights",
  //   ],
  // },
]