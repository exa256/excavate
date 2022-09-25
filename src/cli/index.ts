import { readdirSync } from 'fs'
import chalk from 'chalk';
import readline from 'readline';

// run an action, select run mode, select block number, or run latest
// create new action from a given template
const getAvailableActions = function () {
  return readdirSync("./actions");
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const parseAndRunAction = async function (dir: string[], action: string, mode: string) {
  if (dir.includes('action')) {
    throw new Error(`no valid directory exists for ${action}`)
  }
  switch (mode) {
    case 'Dry':
      const dryAction = require(`../../actions/${action}/dry/run.ts`);
      await dryAction.exec()
      break
    case 'Live':
      const liveAction = require(`../../actions/${action}/live/run.ts`);
      await liveAction.exec()
      break
    default:
      throw new Error('mode is not available')
  }
}

const main = async function () {
  console.log(chalk.yellow('Executing Excavate Runner..\n'))
  const actionsDir = getAvailableActions()
  console.log(chalk.yellow('List of actions available are: \n'))
  actionsDir.map((dir) => {
    console.log(chalk.green(dir), '\n')
  })
  rl.question(chalk.yellow("Which action do you want to run? \n"), function(action) {
    rl.question("In what mode do you want to run? available modes are: \n Dry \n Live \n", async function(mode) {
        console.log(chalk.yellow(`running ${action} in ${mode} mode \n`));
        await parseAndRunAction(actionsDir, action, mode)
        rl.close();
    });
  });

  rl.on("close", function() {
      console.log(chalk.yellow("action executed \n"));
      process.exit(0);
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});