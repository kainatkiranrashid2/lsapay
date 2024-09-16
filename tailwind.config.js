/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // Add this line

  theme: {
    extend: {
      backgroundImage: {
        "starry-night": "url('src/assets/stary_background.svg')",
      },

      fontFamily: {
        Space_Grotesk: ["Space Grotesk", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Sfpro_display: ["SF Pro Display", "sans-serif"],
        PP_Mori: ["PP Mori", "sans-serif"],
      },
      backgroundColor: {
        "night-sky": "#0a192f",
      },

      colors: {
        // "night-sky": "#0a192f",

        primary: "#65D008",
        secondary: "#F5F7F9",
        light: "#f7f7f7",
        light_gray: "#97A3B7",
        light_purple: "#6B29FC",
        dark: "#000000",
        dark2: "#677489",
      },
      borderRadius: {
        "3xl": "3rem",
      },

      container: {
        width: "100%",
        center: true,
        margin: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "5rem",
          xl: "5rem",
          "2xl": "6rem",
        },
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "0rem",
          xl: "0rem",
          "2xl": "0rem",
        },
      },
    },
  },
  plugins: [],
};
