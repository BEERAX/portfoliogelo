"use client";

import ExperienceList from "@/components/ExperienceList";

export default function ExperiencePage() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-24 text-gray-300">
      <h1 className="text-4xl font-bold text-white mb-12 text-center">
        Experience
      </h1>
      <ExperienceList />
    </main>
  );
}
