import AIToolForm from "@/components/AIToolForm";

export default function ChatPage() {
  return (
    <AIToolForm
      title="Chat"
      description="Send a message to the AI assistant."
      endpoint="chat"
      placeholder="Ask anything..."
    />
  );
}