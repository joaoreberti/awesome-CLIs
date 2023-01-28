import { Command } from "commander";
import figlet from "figlet";
import { askForInput } from "./inquirer.js";
const _dirname = process.cwd();
const program = new Command();

// Clear the console
console.clear();
console.log(figlet.textSync("CLI", { horizontalLayout: "full" }));

// Define program

program
  .version("0.0.1")
  .description("A simple CLI to create a new project")
  .option("-h, --help", "Display help for command")
  .option("-v, --version", "Output the version number")
  .option("-f  --flow", "Flow to fix")
  .parse(process.argv);

const options = program.opts();

if (options.help) {
  program.outputHelp();
  process.exit(0);
}

if (options.flow) {
    console.log("Flow is: ", options.flow);
    askForInput()

}
