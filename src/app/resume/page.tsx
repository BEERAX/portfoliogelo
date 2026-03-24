export default function ResumePage() {
  return (
    <main className="w-full h-screen bg-white relative overflow-hidden">
      <a
        href="/resume.pdf"
        download
        className="absolute top-6 right-6 bg-indigo-500 px-5 py-2 rounded-lg text-white shadow-lg hover:bg-indigo-600 transition z-10"
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
