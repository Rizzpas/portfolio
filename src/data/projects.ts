import { Project } from "@/types";

export const projects: Project[] = [
  {
    title: "Rural Health Unit Management Information System",
    description:
      "A web-based Management Information System developed for the Rural Health Unit of Silang, Cavite. This undergraduate Capstone project features an intelligent queueing engine, role-based access control for 9 user roles, and comprehensive security with audit logging — built to handle real-world healthcare operations.",
    tech: [
      "Laravel 12",
      "PHP",
      "MySQL",
      "Blade",
      "Alpine.js",
      "Tailwind CSS",
      "FullCalendar.js",
      "Vite",
    ],
    link: "#",
    status: "In Development",
    highlights: [
      "Intelligent Queueing Engine — automated triage routing that sorts patients by severity, age (isolated pediatric lanes), and practitioner workload",
      "Advanced RBAC supporting 9 distinct user roles from Super Admin and Doctors to Triage Nurses and Lab Technicians",
      "Comprehensive security with dual-layer rate limiting, strict session management, and a silent audit logging system",
      "Custom Asynchronous Polling Engine for real-time dashboard updates without WebSockets",
      "Built-in CMS with a two-tier approval flow for publishing health center announcements",
    ],
  },
  {
    title: "Lieron Engineering Website",
    description:
      "A commissioned website project for an engineering company based in New Zealand. Successfully deployed and currently live, serving as the company's primary online presence.",
    tech: ["React", "Next.js"],
    link: "https://www.lieron.co.nz/",
    github: "https://github.com/Rizzpas/lieron-engineering.git",
    status: "Live",
    highlights: [
      "Commissioned project for a real client — an engineering firm in New Zealand",
      "Fully deployed and currently serving as the company's live production website",
      "Built with React and Next.js for fast, SEO-friendly performance",
    ],
  },
  {
    title: "Personal Portfolio Website",
    description:
      "A modern, responsive portfolio website showcasing my work, education, and skills. Features a clean monochrome design with a 3-column layout, dark/light theme support, and smooth animations.",
    tech: ["Next.js", "React", "TailwindCSS", "TypeScript"],
    link: "#",
    status: "Live",
    highlights: [
      "Three-column responsive layout with collapsible sidebar navigation",
      "Monochrome design system with dark/light theme toggle and smooth transitions",
      "Global search functionality indexing projects, education, and certifications",
      "Staggered entry animations and interactive hover effects throughout",
    ],
  },
];
