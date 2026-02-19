import { FiMessageSquare } from "react-icons/fi";

type ChatBubbleProps = {
  isOpen: boolean;
  hasUnread: boolean;
  onToggle: () => void;
};

const ChatBubble = ({ isOpen, hasUnread, onToggle }: ChatBubbleProps) => {
  return (
    <button
      type="button"
      aria-label="Open live chat"
      onClick={onToggle}
      className="relative flex h-14 w-14 items-center justify-center rounded-full bg-accent text-dark shadow-xl"
    >
      <FiMessageSquare size={22} />
      {hasUnread && !isOpen && (
        <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-secondary" />
      )}
    </button>
  );
};

export default ChatBubble;
