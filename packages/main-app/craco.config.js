const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const TailwindCssWebPlugin = require("./TailwindCssWebPlugin");

const packages = [];
const folders = [
  "file-manager",
  "emi-calculator",
  "pagination",
  "password-generator",
  "sudoko",
];

const tailwindCssPackages = [
  "file-manager",
  "emi-calculator",
  "pagination",
  "password-generator",
];
for (const folder of folders) {
  packages.push(path.join(__dirname, `../${folder}`));
}

module.exports = {
  eslint: {
    enable: false,
  },
  webpack: {
    configure: (webpackConfig, arg) => {
      const { isFound, match } = getLoader(
        webpackConfig,
        loaderByName("babel-loader")
      );
      if (isFound) {
        const include = Array.isArray(match.loader.include)
          ? match.loader.include
          : [match.loader.include];

        match.loader.include = include.concat(packages);
      }
      try {
        tailwindCssPackages.forEach((folder) => {
          webpackConfig.plugins.push(new TailwindCssWebPlugin(folder));
        });
      } catch (err) {
        console.log("=> err", err);
      }

      return webpackConfig;
    },
  },
};
