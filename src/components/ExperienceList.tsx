"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Palawan Group of Companies",
    role: "Full Stack Application Engineer",
    date: "2025 - Present",
    description:
      "I build end-to-end applications, handling both client-side and server-side development. I develop APIs, manage databases, and ensure seamless integration across systems to deliver scalable and efficient solutions.",
  },
  {
    company: "RecruitGo - Phoenix Evolution Dubai",
    role: "Full Stack Software Engineer",
    date: "2024",
    description:
      "Assisted in developing internal tools and APIs. Creating web applications. Collaborated in an Agile team environment and contributed to building chatbots.",
  },
  {
    company: "InfoShift Inc.",
    role: "Full Stack Software Engineer",
    date: "2022 - 2024",
    description:
      "I developed web and mobile applications for various clients, adapting to different project requirements. I worked within Agile/Scrum methodologies to ensure efficient development, collaboration, and timely delivery of high-quality solutions.",
  },
  {
    company: "Asceoft",
    role: "Frontend Software Engineer",
    date: "2022",
    description:
      "I developed web applications using Next.js and React.js, focusing on building responsive and user-friendly UI/UX.",
  },
];

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-8 font-mono">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition-transform"
        >
          {/* Role + Date */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-indigo-400">{exp.role}</span>
            <span className="text-gray-500 text-sm">{exp.date}</span>
          </div>

          {/* Company */}
          <div className="mb-2">
            <span className="text-white font-semibold">
              {">"} {exp.company}
            </span>
          </div>

          {/* Description */}
          <div>
            <span className="text-gray-300 text-sm leading-relaxed">
              {exp.description}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
