export const BLUR_FADE_DELAY = 0.15;

export const siteConfig = {
  name: "Timeo",
  description:
    "Timeo collects availability and builds the weekly rota for restaurant teams.",
  url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  keywords: [
    "Timeo",
    "restaurant",
    "staff scheduling",
    "rota",
    "availability",
  ],
  links: {
    email: "REPLACE_WITH_REAL_EMAIL",
  },
  header: [
    {
      href: "#product",
      label: "Product",
    },
    {
      href: "#how-it-works",
      label: "How it works",
    },
    {
      href: "#faq",
      label: "FAQ",
    },
  ],
  pricing: [
    {
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "Custom integrations",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "Do staff need an account?",
      answer: (
        <span>
          No. They open the link, enter their name and employee ID, and submit
          availability.
        </span>
      ),
    },
    {
      question: "How do staff see their shifts?",
      answer: (
        <span>
          They open the same link again and enter the same name and employee
          ID.
        </span>
      ),
    },
    {
      question: "What if someone submits twice?",
      answer: (
        <span>
          The second submission replaces the first for that employee ID.
        </span>
      ),
    },
    {
      question: "Can I fix the schedule after it is generated?",
      answer: (
        <span>
          Yes. Review and edit it, then confirm. Staff see shifts after you
          confirm.
        </span>
      ),
    },
    {
      question: "Can I run more than one branch?",
      answer: (
        <span>Yes. Each shift requirement belongs to one branch.</span>
      ),
    },
  ],
  footer: [
    {
      title: "Timeo",
      links: [
        { href: "/login", text: "Log in", icon: null },
        { href: "/signup", text: "Get started", icon: null },
        { href: "#product", text: "Product", icon: null },
        { href: "#how-it-works", text: "How it works", icon: null },
        { href: "#faq", text: "FAQ", icon: null },
      ],
    },
  ],
};

export type SiteConfig = typeof siteConfig;
