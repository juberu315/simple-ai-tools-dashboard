import Link from "next/link";

const menuItems = [
  { label: "Chat", href: "/chat" },
  { label: "Summarize", href: "/summarize" },
  { label: "Translate", href: "/translate" },
  { label: "Title Generator", href: "/title-generator" },
  { label: "Code Explainer", href: "/code-explainer" },
];

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-950 text-white p-5">
      <h1 className="text-xl font-bold mb-8">AI Tools</h1>

      <nav className="space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block rounded-lg px-4 py-3 hover:bg-slate-800 transition"
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}