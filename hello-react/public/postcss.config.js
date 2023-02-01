module.exports = {
  plugins: [
    [
      "postcss-preset-env",
      {
        // Options
      },
    ],
  ],
};

module.exports = {
  plugins: {
    tailwindcss: { config: "./tailwind.config.js" },
    autoprefixer: {},
  },
};
