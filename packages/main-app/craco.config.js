const path = require("path");
const { getLoader, loaderByName } = require("@craco/craco");
const TailwindCssWebPlugin = require("./TailwindCssWebPlugin");

const packages = [];
packages.push(path.join(__dirname, "../file-manager"));

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
        webpackConfig.plugins.push(new TailwindCssWebPlugin("file-manager"));
      } catch (err) {
        console.log("=> err", err);
      }

      return webpackConfig;
    },
  },
};
