import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-black">AI Tools Dashboard</h2>
      <p className="text-slate-600 mb-6">
        Practice connecting Next.js frontend with FastAPI backend.
      </p>

      <Link
        href="/chat"
        className="inline-block rounded-xl bg-slate-900 px-6 py-3 text-white"
      >
        Start Practice
      </Link>
    </div>
  );
}