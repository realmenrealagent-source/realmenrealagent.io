import { useEffect, useState } from "react";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import ChatBubble from "./ChatBubble";
import ChatWindow from "./ChatWindow";

type ChatMessage = {
  id: string;
  author: "user" | "agent";
  text: string;
  timestamp: string;
};

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [messages, setMessages] = useLocalStorage<ChatMessage[]>(
    "team-rayan-chat",
    [
      {
        id: "welcome",
        author: "agent",
        text: "Hi! 👋 I'm the RMR AGENTS assistant. 'Two Agents, One Mission.' Want to discuss a web dev or design project?",
        timestamp: new Date().toISOString(),
      },
    ],
  );

  useEffect(() => {
    if (!isOpen) setHasUnread(true);
  }, [messages, isOpen]);

  const handleSend = (text: string) => {
    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      author: "user",
      text,
      timestamp: new Date().toISOString(),
    };
    setMessages([...messages, newMessage]);
    setHasUnread(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <ChatBubble
        isOpen={isOpen}
        hasUnread={hasUnread}
        onToggle={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <ChatWindow
          messages={messages}
          onClose={() => setIsOpen(false)}
          onSend={handleSend}
        />
      )}
    </div>
  );
};

export default LiveChat;
