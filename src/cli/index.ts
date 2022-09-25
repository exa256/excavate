import { exec } from 'child_process'
import { readdirSync } from 'fs'
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
  console.log('Executing Excavate Action Runner..\n')
  const actionsDir = getAvailableActions()
  console.log('List of actions available are: \n')
  actionsDir.map((dir) => {
    console.log(dir, '\n')
  })
  rl.question("Which action do you want to run? \n", function(action) {
    rl.question("In what mode do you want to run? \n available modes are: Dry and Live \n", async function(mode) {
        console.log(`running ${action} in ${mode} \n`);
        await parseAndRunAction(actionsDir, action, mode)
        rl.close();
    });
  });

  rl.on("close", function() {
      console.log("action executed \n");
      process.exit(0);
  });

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});