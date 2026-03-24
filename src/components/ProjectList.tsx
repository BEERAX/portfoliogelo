"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Portfolio Website",
    tech: "Next.js, TypeScript, Tailwind CSS",
    date: "2026",
    description:
      "Developed a modern developer portfolio website with responsive design, terminal-style hero section, and interactive project showcase.",
  },
  {
    name: "Task Manager App",
    tech: "React Native, Firebase",
    date: "2025",
    description:
      "Built a cross-platform mobile app for task management with real-time syncing and push notifications.",
  },
  {
    name: "E-commerce Platform",
    tech: "MERN Stack, Stripe API",
    date: "2024",
    description:
      "Created a fullstack e-commerce website with product catalog, shopping cart, payment integration, and admin dashboard.",
  },
];

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-8">
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-indigo-500">{proj.tech}</span>
            <span className="text-sm text-gray-400">{proj.date}</span>
          </div>
          <h3 className="text-lg font-bold text-white">{proj.name}</h3>
          <p className="mt-2 text-gray-300">{proj.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
