// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
//   darkMode: "class",
//   theme: {
//     extend: {
//       colors: {
//         neon: {
//           50: "#eff6ff",
//           500: "#8b5cf6",
//         },
//       },
//       keyframes: {
//         float: {
//           "0%": { transform: "translateY(0px)" },
//           "50%": { transform: "translateY(-8px)" },
//           "100%": { transform: "translateY(0px)" },
//         },
//       },
//       animation: {
//         float: "float 4s ease-in-out infinite",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
