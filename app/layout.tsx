import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

export const metadata: Metadata = {
  title: "AI Tools Dashboard",
  description: "Next.js frontend connected to FastAPI AI backend",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex min-h-screen bg-slate-100">
          <Sidebar />

          <main className="flex-1 p-8">{children}</main>
        </div>
      </body>
    </html>
  );
}