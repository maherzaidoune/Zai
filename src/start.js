import { Repl } from "./repl";
import inquirer from 'inquirer';

console.log("Zai Language Interpreter")
console.log("0.0.1")

async function MainLoop() {
  const response = await inquirer.prompt([
    {
      type: 'input',
      name: 'question',
      message: '>>'
    }
  ]);
  if (response.question == "Exit()") {
    process.exit()
  } else {
    let repl = new Repl();
    repl.execute(response.question);
    MainLoop()
  }
}
MainLoop()