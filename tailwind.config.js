const { nextui } = require("@nextui-org/theme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "320px",
      sm: `640px`,
      md: `768px`,
      lg: `1024px`,
      xl: `1280px`,
      "2xl": `1366px`,
    },
    extend: {
      colors: {
        customBlue: "#007bff",
        indigo: "#6610f2",
        custom_purple: "#6f42c1",
        custom_pink: "#e83e8c",
        customRed: "#dc3545",
        custom_orange: "#fd7e14",
        custom_yellow: "#ffc107",
        custom_green: "#28a745",
        custom_teal: "#20c997",
        custom_cyan: "#17a2b8",
        custom_white: "#fffff",
        custom_gray: "#6c757d",
        custom_grayDark: "#343a40",
        primary: "#da9f5b",
        secondary: "#33211d",
        success: "#28a745",
        info: "#17a2b8",
        warning: "#ffc107",
        danger: "#dc3545",
        custom_light: "#fffbf2",
        custom_dark: "#111111",
      },
      fontFamily: {
        sansSerif: "Montserrat sans-serif",
        monoSpace: "SFMono-Regular Menlo Monaco Consolas",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addVariant }) {
      addVariant(`child`, `&>*`);
      addVariant(`child-hover`, `&>*:hover`);
    },
  ],
};
