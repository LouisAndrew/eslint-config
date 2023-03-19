const { Option, program } = require("commander");
const { writeFile } = require("fs/promises");
const { join } = require("path");

const pkg = require("./package.json");

const programOptions = ["base", "node", "vue"];
const createContent = (path) => `module.exports = {
   root: true,
   extends: ["${pkg.name}/${path}.js"]
}
`;

module.exports = () => {
  program.addOption(
    new Option("-t, --type <project-type>", "Type of project").choices(
      programOptions
    )
  );

  program.parse();
  const options = program.opts();

  const writeToFile = async (content) => {
    const FILE_PATH = join("./", ".eslintrc.js");
    try {
      await writeFile(FILE_PATH, content);
    } catch (err) {
      console.error(err);
    }
  };

  if (options.type) {
    writeToFile(createContent(options.type)).then(() => {
      if (options.type === "vue") {
        console.log(
          "please run `ni -D @vue/eslint-config-typescript eslint-plugin-vue @vue/eslint-config-typescript`"
        );
      }
      console.log(".eslintrc.js updated 🥳")
    });
  } else {
    console.error("Please add a project type!");
  }
};
