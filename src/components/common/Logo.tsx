import { motion } from "framer-motion";

interface LogoProps {
  variant?: "full" | "icon" | "text";
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  className?: string;
}

const Logo = ({
  variant = "full",
  size = "md",
  animated = false,
  className = "",
}: LogoProps) => {
  const sizeClasses = {
    sm: { container: "h-8", icon: "h-8 w-8", text: "text-sm" },
    md: { container: "h-10", icon: "h-10 w-10", text: "text-base" },
    lg: { container: "h-14", icon: "h-14 w-14", text: "text-xl" },
  };

  const sizes = sizeClasses[size];

  // AI-themed geometric logo icon
  const LogoIcon = () => (
    <motion.div
      className={`relative ${sizes.icon} flex-shrink-0`}
      animate={
        animated
          ? {
              rotate: [0, 5, -5, 0],
            }
          : {}
      }
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Outer hexagon ring */}
      <svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient
            id="logo-gradient-outer"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#6366F1" />
            <stop offset="50%" stopColor="#EC4899" />
            <stop offset="100%" stopColor="#10B981" />
          </linearGradient>
          <linearGradient
            id="logo-gradient-inner"
            x1="100%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#00D4FF" />
            <stop offset="100%" stopColor="#EC4899" />
          </linearGradient>
        </defs>

        {/* Outer hexagon */}
        <motion.polygon
          points="50,5 90,30 90,70 50,95 10,70 10,30"
          fill="none"
          stroke="url(#logo-gradient-outer)"
          strokeWidth="3"
          animate={
            animated
              ? {
                  strokeDasharray: ["0, 400", "400, 0"],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Circuit nodes at hexagon corners */}
        <circle cx="50" cy="5" r="3" fill="#6366F1" />
        <circle cx="90" cy="30" r="3" fill="#EC4899" />
        <circle cx="90" cy="70" r="3" fill="#10B981" />
        <circle cx="50" cy="95" r="3" fill="#00D4FF" />
        <circle cx="10" cy="70" r="3" fill="#EC4899" />
        <circle cx="10" cy="30" r="3" fill="#6366F1" />

        {/* Inner neural network design */}
        <motion.circle
          cx="50"
          cy="50"
          r="15"
          fill="none"
          stroke="url(#logo-gradient-inner)"
          strokeWidth="2"
          animate={
            animated
              ? {
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.7, 1],
                }
              : {}
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Central AI "brain" nodes */}
        <circle cx="50" cy="35" r="4" fill="#6366F1" opacity="0.8" />
        <circle cx="65" cy="50" r="4" fill="#EC4899" opacity="0.8" />
        <circle cx="50" cy="65" r="4" fill="#10B981" opacity="0.8" />
        <circle cx="35" cy="50" r="4" fill="#00D4FF" opacity="0.8" />

        {/* Connecting lines (neural network) */}
        <line
          x1="50"
          y1="35"
          x2="65"
          y2="50"
          stroke="#EC4899"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="65"
          y1="50"
          x2="50"
          y2="65"
          stroke="#10B981"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="50"
          y1="65"
          x2="35"
          y2="50"
          stroke="#00D4FF"
          strokeWidth="1.5"
          opacity="0.5"
        />
        <line
          x1="35"
          y1="50"
          x2="50"
          y2="35"
          stroke="#6366F1"
          strokeWidth="1.5"
          opacity="0.5"
        />

        {/* Center core */}
        <motion.circle
          cx="50"
          cy="50"
          r="6"
          fill="url(#logo-gradient-inner)"
          animate={
            animated
              ? {
                  scale: [1, 1.2, 1],
                }
              : {}
          }
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </motion.div>
  );

  const LogoText = () => (
    <div
      className="inline-flex items-center font-extrabold text-white text-shadow-glow tracking-wide text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl"
      style={{
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        wordBreak: "break-word",
      }}
    >
      RMR AGENTS
    </div>
  );

  if (variant === "icon") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <LogoIcon />
      </div>
    );
  }

  if (variant === "text") {
    return (
      <div className={`inline-flex items-center ${className}`}>
        <LogoText />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center gap-3 ${sizes.container} ${className}`}
    >
      <LogoIcon />
      <LogoText />
    </div>
  );
};

export default Logo;
