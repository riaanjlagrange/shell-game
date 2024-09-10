/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        peak: {
          "0%, 100": {
            transform: "translateY(0px) rotate(0)",
          },
          "25%": {
            transform: "translateY(-5px)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(-10deg)",
          },
          "75%": {
            transform: "translateY(-20px)",
          },
        },
        reveal: {
          "0%, 100": {
            transform: "translateY(0px) rotate(0)",
          },
          "25%": {
            transform: "translateY(-5px)",
          },
          "50%": {
            transform: "translateY(-20px) rotate(-10deg)",
          },
          "75%": {
            transform: "translateY(-20px)",
          },
        },
        shuffle1: {
          "0%, 50%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(400%)" },
          "75%": { transform: "translateX(200%)" },
        },
        shuffle2: {
          "0%, 50%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(200%)" },
          "75%": { transform: "translateX(-200%)" },
        },
        shuffle3: {
          "0%, 50%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-400%)" },
          "75%": { transform: "translateX(-200%)" },
        },
      },
      animation: {
        peak: "peak 0.5s linear",
        shuffle1: "shuffle1 1s ease-in-out infinite",
        shuffle2: "shuffle2 1s ease-in-out infinite",
        shuffle3: "shuffle3 1s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
