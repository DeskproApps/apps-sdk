const babel = require("rollup-plugin-babel");
const typescript = require("rollup-plugin-typescript");
const scss = require("rollup-plugin-scss");
const commonjs = require("rollup-plugin-commonjs");
const resolve = require("rollup-plugin-node-resolve");
const copy = require("rollup-plugin-copy");
const polyfills = require("rollup-plugin-node-polyfills");
const replace = require("rollup-plugin-replace");
const fg = require("fast-glob");

module.exports = {
  input: "src/index-bundle.ts",
  output: {
    file: "dist/deskpro.js",
    format: "iife",
    name: "Deskpro",
  },
  plugins: [
    {
      name: "watch-external",
      async buildStart() {
        (await fg(["src/**/*.ts", "styles/**/*.scss", "deskpro.scss"]))
          .forEach((file) => this.addWatchFile(file))
        ;
      }
    },
    replace({
      DP_TTF_FONT_PATHS: JSON.stringify(fg.sync(["fonts/**/*.ttf"])),
    }),
    polyfills(),
    resolve(),
    commonjs(),
    babel({
      extensions: [".ts"],
      runtimeHelpers: true,
      exclude: "node_modules/**",
      babelrc: true,
    }),
    typescript(),
    scss({
      output: "./dist/deskpro.css",
      failOnError: true,
      outputStyle: "compressed",
      sourceMap: true,
    }),
    copy({
      targets: [
        { src: 'fonts/*', dest: 'dist/fonts' }
      ]
    })
  ],
};
