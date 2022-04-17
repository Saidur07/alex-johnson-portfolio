module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      animation: {
        wiggle: "wiggle 3s linear infinite",
      },
      keyframes: {
        wiggle: {
          "0%, 100%": { margin: "0 0px" },
          "30%": { margin: "0 50px" },
          "70%": { margin: "0px 30px" },
        },
      },
    },
  },
  plugins: [require("daisyui"), require("flowbite/plugin")],
  daisyui: {
    themes: false,
  },
};
