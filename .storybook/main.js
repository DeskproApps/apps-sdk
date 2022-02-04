module.exports = {
  stories: ["../src/ui/**/*.stories.@(ts|tsx|jsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  features: {
    babelModeV7: true,
    postcss: false,
  },
  webpackFinal: (config) => {
    config.module.rules = [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto",
      },
      ...config.module.rules,
    ];
    config.resolve.extensions.push(".mjs");

    return config;
  },
};
