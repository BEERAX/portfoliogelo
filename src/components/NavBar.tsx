"use client";

import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();

  return (
    <div className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-4 md:gap-0 py-4 px-4 md:px-10 border-b border-gray-800 sticky top-0 bg-slate-950 z-50">
      <span
        className="font-mono text-green-400 text-lg md:text-xl cursor-pointer text-center md:text-left"
        onClick={() => router.push("/")}
      >
        GeloDev.Portfolio | Home
      </span>
      <div className="flex justify-center md:justify-end">
        <div
          className="font-mono text-green-400 hover:bg-gray-800 bg-gray-900 border border-gray-800 px-4 py-2 rounded-lg cursor-pointer w-full md:w-auto text-center"
          onClick={() => router.push("/resume")}
        >
          Resume
        </div>
      </div>
    </div>
  );
}
