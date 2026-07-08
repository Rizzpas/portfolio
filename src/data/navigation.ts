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
  { name: "Facebook", url: "https://www.facebook.com/ripas.jonathan14", icon: "facebook" },
  { name: "Instagram", url: "https://www.instagram.com/nat.rps/", icon: "instagram" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/jonathan-ripas-9197b5310/", icon: "linkedin" },
  { name: "GitHub", url: "https://github.com/Rizzpas", icon: "github" },
  { name: "Email", url: "mailto:jonathan.ripas14@gmail.com", icon: "email" },
];
