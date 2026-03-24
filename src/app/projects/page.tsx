"use client";

import ProjectsList from "@/components/ProjectList";

export default function ExperiencePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-gray-300">
      <div className="text-center mb-12">
        <span className="font-mono text-4xl font-bold text-white">
          Projects
        </span>
      </div>
      <ProjectsList />
    </main>
  );
}
