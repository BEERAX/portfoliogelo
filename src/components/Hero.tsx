"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const lines = [
  "gelo@dev:~$ Welcome to my portfolio",
  "gelo@dev:~$ Software Engineer",
  "gelo@dev:~$ Web & Mobile Developer",
];

export default function Hero() {
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(""); // current typing line
  const [lineIndex, setLineIndex] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (lineIndex >= lines.length) return;

    const line = lines[lineIndex];
    let charIndex = 0;

    const interval = setInterval(() => {
      setCurrentLine((prev) => prev + line[charIndex]);
      charIndex++;

      if (charIndex === line.length) {
        clearInterval(interval);
        setDisplayedLines((prev) => [...prev, line]);
        setCurrentLine(""); // reset for next line
        setLineIndex((prev) => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [lineIndex]);

  return (
    <section className="flex justify-center items-center py-32 px-6 min-h-[60vh]">
      <div className="bg-gray-900 border border-gray-800 rounded-xl p-10 font-mono text-green-400 text-center">
        {/* Completed lines */}
        {displayedLines.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {line}
          </motion.div>
        ))}

        {/* Current typing line */}
        {lineIndex < lines.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {currentLine}
            <span className="blinking-cursor">|</span>
          </motion.div>
        )}

        {/* CTA buttons */}
        {lineIndex >= lines.length && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex justify-center gap-4"
          >
            <div
              className="border border-gray-700 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => router.push("/projects")}
            >
              View Projects
            </div>
            <div
              className="border border-gray-700 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => router.push("/experience")}
            >
              Experience
            </div>
            <div
              className="border border-gray-700 px-6 py-3 rounded-lg cursor-pointer hover:scale-105 transition-transform"
              onClick={() => router.push("/contact")}
            >
              Contact Me
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
