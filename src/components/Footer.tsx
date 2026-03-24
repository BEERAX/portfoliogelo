"use client";

export default function Footer() {
  return (
    <div className="w-full bg-gray-900 border-t border-gray-800 py-6">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400">
        {/* Left side */}
        <span>© 2026 Gelo Tilaon. All rights reserved.</span>

        {/* Right side – social links */}
        <div className="flex gap-6">
          <span
            className="cursor-pointer hover:text-white"
            onClick={() => window.open("https://github.com/BEERAX", "_blank")}
          >
            GitHub
          </span>
          <span
            className="cursor-pointer hover:text-white"
            onClick={() =>
              window.open("https://www.linkedin.com/in/gelotilaon/", "_blank")
            }
          >
            LinkedIn
          </span>
          <span
            className="cursor-pointer hover:text-white"
            onClick={() => window.open("https://www.facebook.com/beerax14")}
          >
            Facebook
          </span>
        </div>
      </div>
    </div>
  );
}
