/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        newFont: '"Nunito Sans"',
      },
      colors: {
        lmbg: "hsl(0, 0%, 98%)",
        lmt: "hsl(200, 15%, 8%)",
        dmbg: "hsl(207, 26%, 17%)",
        dme: "hsl(209, 23%, 22%)",
        dminput: "hsl(0, 0%, 52%)",
        lmtne: "hsl(0, 0%, 100%)",
      },
      boxShadow: {
        "3xl": "-1px 0px 10px 2px rgba(0,0,0,0.67);",
      },
    },
  },
  plugins: [],
};
