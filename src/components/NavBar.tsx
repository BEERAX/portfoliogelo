"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full flex justify-between items-center py-6 px-10 border-b border-gray-800 sticky top-0 bg-slate-950 z-50">
      <span
        className="font-mono text-green-400 text-xl cursor-pointer"
        onClick={() => router.push("/")}
      >
        GeloDev.Portfolio
      </span>
      <div
        className="font-mono text-green-400 bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg cursor-pointer"
        onClick={() => router.push("/resume")}
      >
        Resume
      </div>
    </div>
  );
}
