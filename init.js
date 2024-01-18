const { Option, program } = require("commander");
const { writeFile, readFile } = require("fs/promises");
const { join } = require("path");
const cb = require("clipboardy");

const pkg = require("./package.json");

const programOptions = ["base", "node", "vue", "react"];
const createContent = (path) => `module.exports = {
   root: true,
   extends: ["${pkg.name}/${path}.js"]
}
`;

const getExtraDependencies = (type) => {
  switch (type) {
    case "vue":
      return [
        "@vue/eslint-config-typescript",
        "eslint-plugin-vue",
        "@vue/eslint-config-prettier",
      ];
    case "react":
      return ["eslint-plugin-react", "eslint-plugin-react-hooks"];
    default:
      return [];
  }
};

module.exports = () => {
  program.addOption(
    new Option("-t, --type <project-type>", "Type of project").choices(
      programOptions,
    ),
  );

  program.parse();
  const options = program.opts();

  const isClientUsingESM = async () => {
    try {
      const clientPackage = JSON.parse(
        await readFile(join("./", "package.json"), "utf-8"),
      );

      if (clientPackage.type === "module") {
        return true;
      }
    } catch {
      //
    }

    return false;
  };
  const writeToFile = async (content) => {
    const isESM = await isClientUsingESM();
    const FILE_PATH = join("./", ".eslintrc" + (isESM ? ".cjs" : ".js"));
    try {
      await writeFile(FILE_PATH, content);
    } catch (err) {
      console.error(err);
    }
  };

  if (options.type) {
    writeToFile(createContent(options.type)).then(() => {
      const additionalDependencies = getExtraDependencies(options.type);
      if (additionalDependencies.length > 0) {
        const installCommand = `ni -D ${additionalDependencies.join(" ")}`;
        cb.default.writeSync(installCommand);
        console.log(
          `please run ${installCommand}. Install command copied to clipboard.`,
        );
      }

      console.log(".eslintrc.js updated 🥳");
    });
  } else {
    console.error("Please add a project type!");
  }
};
