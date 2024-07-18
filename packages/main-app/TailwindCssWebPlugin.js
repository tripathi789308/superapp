const { exec } = require("child_process");

class TailwindCssWebPlugin {
  constructor(packageName) {
    this.package = packageName;
  }
  apply(compiler) {
    compiler.hooks.afterCompile.tapAsync(
      "TailewindCssWebPlugin",
      (compilation, callback) => {
        const command = `cd ../${this.package} && npx tailwindcss -i ./src/index.css -o ./src/styles.css`;
        console.log(command);
        exec(command, (error, stdout, stderr) => {
          if (error) {
            console.error(`Error executing Tailwind CSS command: ${error}`);
          }
          if (stderr) console.log(stderr);
          if (stdout) console.log(stdout);
          callback();
        });
      }
    );
  }
}

module.exports = TailwindCssWebPlugin;
