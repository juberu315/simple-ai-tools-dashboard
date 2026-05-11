"use client";

import { useState } from "react";
import { sendAIRequest } from "@/lib/api";

interface AIToolFormProps {
  title: string;
  description: string;
  endpoint: string;
  placeholder: string;
}

export default function AIToolForm({
  title,
  description,
  endpoint,
  placeholder,
}: AIToolFormProps) {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!input.trim()) {
      setError("Please enter some text.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult("");

      const data = await sendAIRequest(endpoint, input);

      setResult(data.result);
    } catch (err) {
      setError("Something went wrong. Please check your FastAPI backend.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-slate-900">{title}</h2>
        <p className="text-slate-600 mt-2">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={placeholder}
          className="w-full min-h-40 rounded-xl border border-slate-300 p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
        />

        <button
          type="submit"
          disabled={loading}
          className="rounded-xl bg-slate-900 px-6 py-3 text-white font-medium hover:bg-slate-700 disabled:opacity-50"
        >
          {loading ? "Processing..." : "Submit"}
        </button>
      </form>

      {error && (
        <div className="mt-6 rounded-xl bg-red-50 border border-red-200 p-4 text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 rounded-xl bg-white border border-slate-200 p-5 shadow-sm">
          <h3 className="font-semibold mb-3">AI Response</h3>
          <p className="whitespace-pre-wrap text-slate-700">{result}</p>
        </div>
      )}
    </div>
  );
}