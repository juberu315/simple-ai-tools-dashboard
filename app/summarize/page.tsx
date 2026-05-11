import AIToolForm from "@/components/AIToolForm";

export default function SummarizePage() {
  return (
    <AIToolForm
      title="Summarize"
      description="Paste long text and get a short summary."
      endpoint="summarize"
      placeholder="Paste text to summarize..."
    />
  );
}