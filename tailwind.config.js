/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      utilities: {
        ".reset": {
          all: "initial",
        },
      },
      colors: {
        Orange: "hsl(26, 100%, 55%)",
        PaleOrange: "hsl(25, 100%, 94%)",
        VeryDarkBlue: "hsl(220, 13%, 13%)",
        DarkGrayishBlue: "hsl(219, 9%, 45%)",
        GrayishBlue: "hsl(220, 14%, 75%)",
        LightGrayishBlue: "hsl(223, 64%, 98%)",
        White: "hsl(0, 0%, 100%)"
      },
      fontFamily: {
        "Kumbh":["Kumbh Sans", 'sans-serif'],
      },
      fontSize: {
        s: '0.6rem',
      }
    },
  },
  plugins: [],
};
