/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0e1a2b",
        soft: "#4a5668",
        brand: { DEFAULT: "#1488cc", dark: "#0b6aa2" },
        leaf: "#4fae3b",
        mist: "#eef4fb",
        line: "#d9e4f0",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        sans: ['"DM Sans Variable"', "system-ui", "sans-serif"],
      },
      keyframes: {
        marquee: { "0%": { transform: "translateX(0)" }, "100%": { transform: "translateX(-50%)" } },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-18px)" } },
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
