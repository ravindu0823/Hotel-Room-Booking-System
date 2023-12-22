/** @type {import('tailwindcss').Config} */
import withMt from "@material-tailwind/react/utils/withMT";

export default withMt({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans"],
        orbitron: ["Orbitron", "sans-serif"],
        oswald: ["Oswald", "sans-serif"],
      },
    },
  },
  plugins: [import("@tailwindcss/forms")],
});
