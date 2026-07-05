import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A clean, modern portfolio website built with Next.js and TailwindCSS. Features a responsive 3-column layout, dark mode support, and customized scrollbars.",
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    link: "#",
    github: "#",
    status: "Live",
    highlights: [
      "Three-column responsive layout with collapsible sidebar navigation",
      "Dark/light theme toggle with smooth transitions and system preference detection",
      "Custom global search indexing experience, projects, education, and certifications",
      "Staggered entry animations and interactive hover effects throughout",
    ],
  },
  {
    title: "AI Chat Assistant",
    description: "An intelligent chatbot application integrating with advanced LLMs to provide context-aware responses and coding assistance.",
    tech: ["Python", "React", "OpenAI API", "FastAPI"],
    link: "#",
    github: "#",
    status: "Live",
    highlights: [
      "Real-time streaming responses with markdown rendering and syntax highlighting",
      "Conversation memory with context window management for multi-turn dialogues",
      "RAG pipeline for domain-specific knowledge retrieval using vector embeddings",
      "Authentication system with rate limiting and usage analytics dashboard",
    ],
  },
  {
    title: "E-commerce Dashboard",
    description: "A full-stack dashboard for managing online store inventory, tracking sales metrics, and processing orders in real-time.",
    tech: ["Next.js", "PostgreSQL", "Prisma", "Stripe"],
    link: "#",
    github: "#",
    status: "In Development",
    highlights: [
      "Real-time sales analytics with interactive charts and customizable date ranges",
      "Inventory management with low-stock alerts and automated reorder suggestions",
      "Stripe integration for seamless payment processing and refund management",
      "Role-based access control for admin, manager, and staff user tiers",
    ],
  },
  {
    title: "Weather Progressive Web App",
    description: "A fast and reliable weather application that works offline, providing accurate forecasts and radar maps.",
    tech: ["React", "Service Workers", "Weather API"],
    link: "#",
    github: "#",
    status: "Live",
    highlights: [
      "Offline-first architecture using Service Workers and IndexedDB caching",
      "Animated weather visualizations with hourly and 7-day forecast views",
      "Geolocation-based auto-detection with saved locations management",
      "Push notifications for severe weather alerts and daily forecast summaries",
    ],
  },
];
