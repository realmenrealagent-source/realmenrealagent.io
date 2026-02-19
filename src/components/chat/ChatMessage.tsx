type ChatMessageType = {
  id: string;
  author: "user" | "agent";
  text: string;
  timestamp: string;
};

type ChatMessageProps = {
  message: ChatMessageType;
};

const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.author === "user";
  return (
    <div className={isUser ? "ml-auto max-w-[75%]" : "max-w-[75%]"}>
      <div
        className={
          isUser
            ? "rounded-2xl bg-accent px-4 py-2 text-sm text-dark"
            : "rounded-2xl bg-gray px-4 py-2 text-sm text-dark/80"
        }
      >
        {message.text}
      </div>
    </div>
  );
};

export default ChatMessage;
