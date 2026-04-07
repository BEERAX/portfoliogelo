"use client";

export default function ResumePage() {
  return (
    <main className="w-full h-screen bg-white relative overflow-hidden">
      <a
        href="/resume.pdf"
        download
        className="absolute top-6 right-6 bg-gray-900 border border-gray-800 p-3 rounded-lg text-green-400 shadow-lg hover:bg-gray-800 transition z-10 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
          />
        </svg>
      </a>

      <iframe
        src="/resume.pdf#toolbar=0&navpanes=0&zoom=page-fit"
        className="w-full h-screen"
      />
    </main>
  );
}

// className="font-mono text-green-400 bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg cursor-pointer"
