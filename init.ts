#!/usr/bin/env node
import { Option, program } from "commander";
import { writeFile } from "fs/promises";
import { join } from "path";

const programOptions = ["base", "node", "vue"] as const;
const createContent = (path: string) => `module.exports = {
   root: true,
   extends: ["@louisandrew/eslint-config/${path}.js"]
}
`;

program.addOption(
  new Option("-t, --type <project-type>", "Type of project").choices(
    programOptions
  )
);

program.parse();
const options = program.opts();

const writeToFile = async (content: string) => {
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
  });
}
