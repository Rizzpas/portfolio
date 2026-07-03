import { NavSection, SocialLink } from "@/types";

export const navSections: NavSection[] = [
  {
    label: "About Me",
    items: [
      { name: "Experience", href: "/experience" },
      { name: "Education", href: "/education" },
      { name: "Projects", href: "/projects" },
      { name: "Certifications", href: "/certifications" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
  { name: "Facebook", url: "#", icon: "facebook" },
  { name: "Instagram", url: "#", icon: "instagram" },
  { name: "LinkedIn", url: "#", icon: "linkedin" },
  { name: "Google", url: "#", icon: "google" },
  { name: "GitHub", url: "#", icon: "github" },
  { name: "Email", url: "mailto:jonathan.ripas@gmail.com", icon: "email" },
];
