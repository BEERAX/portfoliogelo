"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "TechCorp Inc.",
    role: "Frontend Developer",
    date: "Jan 2022 - Present",
    description:
      "Built scalable web applications using React, Next.js, and TypeScript. Optimized performance and implemented responsive design.",
  },
  {
    company: "AppSolutions",
    role: "Software Engineer Intern",
    date: "Jun 2021 - Dec 2021",
    description:
      "Assisted in developing internal tools and APIs using Node.js. Collaborated in agile team environment.",
  },
  {
    company: "Freelance Projects",
    role: "Fullstack Developer",
    date: "2019 - 2021",
    description:
      "Delivered web applications for clients using MERN stack, integrated MySQL databases, and handled deployment.",
  },
];

export default function ExperienceList() {
  return (
    <div className="flex flex-col gap-8">
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-gray-800 p-6 rounded-xl border border-gray-700 hover:scale-105 transition-transform"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-indigo-500">{exp.role}</span>
            <span className="text-sm text-gray-400">{exp.date}</span>
          </div>
          <h3 className="text-lg font-bold text-white">{exp.company}</h3>
          <p className="mt-2 text-gray-300">{exp.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
