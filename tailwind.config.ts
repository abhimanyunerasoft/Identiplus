import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)", // #3B1E54
        secondary: "var(--secondary)", // #9B7EBD
        tertiary: "var(--tertiary)", // #D4BEE4
        neutral: "var(--neutral)", // #EEEEEE
        mainbg: "var(--main)", // #f3f3ff
      },
    },
  },
  plugins: [],
} satisfies Config;
