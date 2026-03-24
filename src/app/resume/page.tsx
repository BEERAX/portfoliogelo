"use client";

export default function ResumePage() {
  return (
    <main className="w-full h-screen bg-white relative overflow-hidden">
      <a
        href="/resume.pdf"
        download
        className="absolute top-6 right-6 font-mono bg-gray-900 border border-gray-800 px-5 py-2 rounded-lg text-green-400 shadow-lg hover:bg-gray-800 transition z-10"
      >
        Download
      </a>

      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0&zoom=page-fit"
        className="w-full h-screen"
      />
    </main>
  );
}

// className="font-mono text-green-400 bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg cursor-pointer"
