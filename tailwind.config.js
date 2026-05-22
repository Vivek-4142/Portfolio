/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#050816",
        card: "rgba(255,255,255,0.06)",
        primary: "#8B5CF6",
        secondary: "#06B6D4",
        accent: "#3B82F6",
      },
      boxShadow: {
        glow: "0 0 30px rgba(139, 92, 246, 0.35)",
        cyanGlow: "0 0 25px rgba(6, 182, 212, 0.25)",
      },
      backgroundImage: {
        mesh:
          "radial-gradient(circle at 20% 20%, rgba(139,92,246,0.15), transparent 28%), radial-gradient(circle at 80% 25%, rgba(6,182,212,0.15), transparent 28%), radial-gradient(circle at 50% 80%, rgba(59,130,246,0.1), transparent 28%)",
      },
      animation: {
        marquee: "marquee 18s linear infinite",
        marqueeReverse: "marqueeReverse 20s linear infinite",
        float: "float 4s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
}