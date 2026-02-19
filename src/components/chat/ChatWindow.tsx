import { useEffect, useState } from "react";
import { FiSend, FiX } from "react-icons/fi";
import ChatMessage from "./ChatMessage";

type ChatMessageType = {
  id: string;
  author: "user" | "agent";
  text: string;
  timestamp: string;
};

type ChatWindowProps = {
  messages: ChatMessageType[];
  onClose: () => void;
  onSend: (text: string) => void;
};

const ChatWindow = ({ messages, onClose, onSend }: ChatWindowProps) => {
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [offlineDetails, setOfflineDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const handleSend = () => {
    if (!input.trim()) return;
    onSend(input.trim());
    setInput("");
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1200);
  };

  const handleOfflineSubmit = () => {
    if (
      !offlineDetails.name ||
      !offlineDetails.email ||
      !offlineDetails.message
    )
      return;
    onSend(
      `Offline message from ${offlineDetails.name}: ${offlineDetails.message}`,
    );
    setOfflineDetails({ name: "", email: "", message: "" });
  };

  return (
    <div className="mt-4 w-80 rounded-3xl border border-gray bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray px-4 py-3">
        <div>
          <p className="text-sm font-extrabold text-primary">
            RMR <span className="text-neon font-bold">agents</span>
          </p>
          <p className="text-xs text-dark/60">Typically replies in 24 hours</p>
        </div>
        <button type="button" aria-label="Close chat" onClick={onClose}>
          <FiX />
        </button>
      </div>
      <div className="max-h-64 space-y-3 overflow-y-auto px-4 py-3">
        {messages.map((message) => (
          <ChatMessage key={message.id} message={message} />
        ))}
        {isTyping && <p className="text-xs text-dark/60">Agent is typing...</p>}
      </div>
      {!isOnline ? (
        <div className="space-y-3 border-t border-gray px-4 py-4">
          <p className="text-xs text-dark/70">
            We are offline. Leave a message:
          </p>
          <input
            value={offlineDetails.name}
            onChange={(event) =>
              setOfflineDetails({ ...offlineDetails, name: event.target.value })
            }
            placeholder="Name"
            className="w-full rounded-xl border border-gray px-3 py-2 text-xs"
          />
          <input
            value={offlineDetails.email}
            onChange={(event) =>
              setOfflineDetails({
                ...offlineDetails,
                email: event.target.value,
              })
            }
            placeholder="Email"
            className="w-full rounded-xl border border-gray px-3 py-2 text-xs"
          />
          <textarea
            value={offlineDetails.message}
            onChange={(event) =>
              setOfflineDetails({
                ...offlineDetails,
                message: event.target.value,
              })
            }
            placeholder="Message"
            rows={3}
            className="w-full rounded-xl border border-gray px-3 py-2 text-xs"
          />
          <button
            type="button"
            onClick={handleOfflineSubmit}
            className="rounded-full bg-accent px-4 py-2 text-xs font-semibold text-dark"
          >
            Send
          </button>
        </div>
      ) : (
        <div className="flex items-center gap-2 border-t border-gray px-4 py-3">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Type a message"
            className="flex-1 rounded-full border border-gray px-4 py-2 text-sm"
          />
          <button
            type="button"
            onClick={handleSend}
            className="rounded-full bg-accent p-2 text-dark"
          >
            <FiSend size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ChatWindow;
