// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    "nativewind/postcss": {
      output: "nativewind-output.js",
    },
  },
};
