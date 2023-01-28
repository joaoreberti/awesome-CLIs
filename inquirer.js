import inquirer from "inquirer";

export async function askForInput() {
    const value = inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
  }]).then((answers) => {
    console.log({ answers });
    return answers;
  });
  return value;
}

// askForInput()