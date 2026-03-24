"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gray-900 p-8 rounded-xl border border-gray-800 max-w-xl mx-auto hover:scale-105 transition-transform font-mono"
    >
      {/* Centered block, left-aligned content */}
      <div className="flex flex-col gap-5 text-gray-300 text-sm max-w-sm mx-auto">
        {/* Phone */}
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M3 5a2 2 0 012-2h2l2 5-2 2a16 16 0 007 7l2-2 5 2v2a2 2 0 01-2 2C10 21 3 14 3 5z" />
          </svg>
          <span>0994 829 1377</span>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 4h16v16H4z" />
            <path d="M4 4l8 8 8-8" />
          </svg>
          gelo.tilaon@gmail.com
        </div>

        {/* LinkedIn */}
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M6.94 6.5A2.44 2.44 0 1 1 2.06 6.5 2.44 2.44 0 0 1 6.94 6.5zM3 8.98h3.88V21H3zM9.34 8.98h3.72v1.64h.05c.52-.98 1.78-2.02 3.67-2.02 3.92 0 4.64 2.58 4.64 5.94V21h-3.88v-5.5c0-1.31-.02-2.99-1.82-2.99-1.82 0-2.1 1.42-2.1 2.9V21H9.34z" />
          </svg>
          <a
            href="https://linkedin.com/in/gelotilaon"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            linkedin.com/in/gelotilaon
          </a>
        </div>

        {/* GitHub */}
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 .5A12 12 0 0 0 0 12.7c0 5.37 3.44 9.92 8.2 11.52.6.12.82-.27.82-.6v-2.23c-3.34.74-4.04-1.64-4.04-1.64-.55-1.43-1.34-1.8-1.34-1.8-1.1-.77.08-.75.08-.75 1.22.09 1.86 1.28 1.86 1.28 1.08 1.9 2.83 1.35 3.52 1.03.11-.8.42-1.35.76-1.66-2.66-.31-5.47-1.36-5.47-6.05 0-1.34.47-2.43 1.24-3.29-.12-.31-.54-1.56.12-3.26 0 0 1.01-.33 3.3 1.26a11.2 11.2 0 0 1 6 0c2.28-1.59 3.29-1.26 3.29-1.26.66 1.7.24 2.95.12 3.26.77.86 1.24 1.95 1.24 3.29 0 4.7-2.82 5.73-5.5 6.03.43.38.81 1.12.81 2.27v3.36c0 .33.22.73.83.6A12.22 12.22 0 0 0 24 12.7 12 12 0 0 0 12 .5z" />
          </svg>
          <a
            href="https://github.com/BEERAX"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            github.com/BEERAX
          </a>
        </div>

        {/* Facebook */}
        <div className="flex items-center gap-3">
          <svg
            className="w-5 h-5 text-indigo-400"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M22 12a10 10 0 1 0-11.6 9.87v-6.99H7.9V12h2.5V9.8c0-2.47 1.46-3.83 3.7-3.83 1.07 0 2.2.2 2.2.2v2.42h-1.24c-1.22 0-1.6.77-1.6 1.56V12h2.72l-.43 2.88h-2.29v6.99A10 10 0 0 0 22 12z" />
          </svg>
          <a
            href="https://www.facebook.com/beerax14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-400 hover:underline"
          >
            facebook.com/beerax14
          </a>
        </div>
      </div>
    </motion.div>
  );
}
