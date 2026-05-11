import AIToolForm from "@/components/AIToolForm";

export default function TranslatePage() {
  return (
    <AIToolForm
      title="Translate"
      description="Translate text into simple English."
      endpoint="translate"
      placeholder="Enter text to translate..."
    />
  );
}