import { Education } from "@/types";

export const education: Education[] = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of Technology",
    period: "2017 — 2021",
    description: "Graduated with honors. Focused on software engineering, data structures, and web technologies. Active member of the university coding club.",
    gpa: "3.8 / 4.0",
    highlights: [
      "Dean's List for 6 consecutive semesters with a cumulative GPA of 3.8",
      "Thesis: \"Intelligent Document Classification Using Transformer-Based Architectures\"",
      "Core coursework: Data Structures, Algorithms, Machine Learning, Database Systems, Software Engineering",
      "Vice President of the university Computer Science Society — organized hackathons and tech talks",
      "Won 1st place at the university-wide hackathon for an AI-powered campus navigation app",
    ],
  },
  {
    degree: "Full Stack Web Development Bootcamp",
    institution: "Code Academy Online",
    period: "2020",
    description: "Intensive 12-week program covering modern web development with JavaScript, React, and Node.js.",
    highlights: [
      "Completed 12 capstone projects spanning frontend, backend, and full-stack development",
      "Built a real-time collaborative task management app as the final capstone project",
      "Learned modern tooling: Git, Docker, CI/CD pipelines, and cloud deployment (AWS, Vercel)",
      "Earned top 5% distinction among 200+ program participants",
    ],
  },
];
