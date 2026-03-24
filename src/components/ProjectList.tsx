"use client";

import { motion } from "framer-motion";

const projects = [
  {
    name: "Cash Management System - CAHA",
    tech: "React.js, Next.js, TypeScript, Tailwind CSS, C#, ASP.NET, MySQL, Jenkins, Docker",
    date: "2026",
    description:
      "CAHA is a cash management system designed to automate the flow of financial data between branches and the head office. It enables branches to submit income reports efficiently while allowing the head office to consolidate, review, and redistribute reports. The system improves accuracy, reduces manual processing, and enhances financial transparency.",
  },
  {
    name: "NetSuite Integration",
    tech: "C#, ASP.NET, MySQL",
    date: "2025",
    description:
      "This project involves integrating our system with NetSuite to enable seamless data synchronization between platforms. It allows automatic transfer of financial data, transactions, and reports, reducing manual work and ensuring data consistency across systems.",
  },
  {
    name: "Computerized/Automated Management Information System (CAMIS)",
    tech: "Next.js, TypeScript, Tailwind CSS, C#, ASP.NET, MySQL, Jenkins, Docker",
    date: "2025",
    description:
      "CAMIS is a centralized reporting system that aggregates data from multiple branches into a single platform. It enables real-time submission, consolidation, and sharing of reports, providing stakeholders with accurate insights and improved operational visibility.",
  },
  {
    name: "Hawkeye Monitoring System (PMVIC Vehicle Inspection)",
    tech: "Vue.js, TypeScript, Tailwind CSS, Django, PostgreSQL, Flutter",
    date: "2024",
    description:
      "Hawkeye is an automated monitoring system designed for PMVIC (Private Motor Vehicle Inspection Centers). As vehicles pass through an inspection lane, integrated cameras capture images and analyze them to detect visible defects such as body damage, missing parts, or irregularities. The system records inspection data in real time, improving accuracy, efficiency, and transparency in vehicle assessment.",
  },
  {
    name: "Enstack SuperApp",
    tech: "Vue.js, TypeScript, Tailwind CSS, Django, PostgreSQL, Flutter",
    date: "2023",
    description:
      "Enstack is a mobile-first superapp built for SMEs that streamlines business operations by integrating e-commerce, point-of-sale, payments, logistics, and financial tracking into one unified system. It eliminates the need for multiple tools, allowing entrepreneurs to efficiently run and scale their businesses from a single app.",
  },
  {
    name: "Renewable Energy Billing System",
    tech: "React.js, Next.js",
    date: "2022",
    description:
      "This billing system for renewable energy is designed to automate the calculation and management of energy usage and billing. It supports tracking renewable energy sources such as solar and wind, generates accurate billing statements, and ensures transparent and efficient payment processing.",
  },
  {
    name: "Hotel Booking System",
    tech: "React.js, Next.js",
    date: "2022",
    description:
      "The Hotel Booking System is a web application that enables users to browse available rooms, make reservations, and manage bookings. It provides real-time availability, booking confirmation, and user-friendly interfaces to improve the overall customer experience.",
  },
];

export default function ProjectsList() {
  return (
    <div className="flex flex-col gap-8 font-mono">
      {projects.map((proj, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:scale-105 transition-transform"
        >
          {/* Tech + Date */}
          <div className="flex justify-between items-center mb-2">
            <span className="text-indigo-400 text-sm">{proj.tech}</span>
            <span className="text-gray-500 text-sm">{proj.date}</span>
          </div>

          {/* Project Name */}
          <div className="mb-2">
            <span className="text-white font-semibold">
              {">"} {proj.name}
            </span>
          </div>

          {/* Description */}
          <div>
            <span className="text-gray-300 text-sm leading-relaxed">
              {proj.description}
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
