/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#edf2f8",
        secondary: "#313bac",
        accent: "#892621",
        black100: "#24242b",
        black75: "rgba(36, 36, 43, 0.75)",
        black50: "rgba(36, 36, 43, 0.5)",
        black25: "rgba(36, 36, 43, 0.25)",
        black10: "rgba(36, 36, 43, 0.1)",
        black5: "rgba(36, 36, 43, 0.05)",
        error: "#ab3a30",
      },
    },
  },
  plugins: [],
};
