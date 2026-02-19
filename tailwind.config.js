/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#EC4899",
        accent: "#10B981",
        dark: "#0F172A",
        light: "#F8FAFC",
        gray: "#E2E8F0",
        neon: "#00D4FF",
        vibrant: "#FF00FF",
      },
      fontFamily: {
        brand: ["Bebas Neue", "Orbitron", "Poppins", "sans-serif"],
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        glow: {
          "0%, 100%": { boxShadow: "0 0 0px rgba(16, 185, 129, 0.0)" },
          "50%": { boxShadow: "0 0 30px rgba(16, 185, 129, 0.5)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideInRight: {
          "0%": { transform: "translateX(50px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        bounceGlow: {
          "0%, 100%": {
            transform: "translateY(0)",
            boxShadow: "0 0 10px rgba(99, 102, 241, 0.3)",
          },
          "50%": {
            transform: "translateY(-10px)",
            boxShadow: "0 0 30px rgba(99, 102, 241, 0.6)",
          },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%": { transform: "rotate(-2deg)" },
          "75%": { transform: "rotate(2deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        glow: "glow 3.5s ease-in-out infinite",
        gradient: "gradientShift 12s ease infinite",
        shimmer: "shimmer 3s infinite",
        slideUp: "slideUp 0.6s ease-out",
        slideLeft: "slideInLeft 0.6s ease-out",
        slideRight: "slideInRight 0.6s ease-out",
        bounceGlow: "bounceGlow 3s ease-in-out infinite",
        wiggle: "wiggle 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
