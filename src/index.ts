#! /usr/bin/env node
//import figlet from 'figlet'
//import chalk from 'chalk'
//import config from './services/config'
import {program} from 'commander'
import show from './commands/show'
import set from './commands/set'
import ls from './commands/ls'
import putCluster from './commands/putCluster'
import inquirer from 'inquirer'
import inquirerPrompt from 'inquirer-autocomplete-prompt'
const packageJson = require('./../package.json')

inquirer.registerPrompt('autocomplete', inquirerPrompt)

program
  .name(`kcmd`)
  .usage(`[global options] command - ${packageJson.version}`)
  .version(packageJson.version, '-v, --version', 'output the current version')
  .option('-t, --topic <topic>', 'override selected topic')

/*
  .on('option:topic', function () {
    process.env.TOPIC = this.opts().topic
  })
  .option('-g, --group <group>', 'override selected group')
  .on('option:group', function () {
    process.env.GROUP = this.opts().group
  })
  .option('-c, --cluster <name>', 'override selected cluster by name')
  .on('option:cluster', function () {
    process.env.CLUSTER = this.opts().cluster
  })
*/

program
  .command('ls <type>')
  .description('List clusters/brokers/topics/groups/groupsByTopic/topicsByGroup')
  .action(ls)

program
  .command('set <type> [value]')
  .description('Set a kafka cluster/topic/group')
  .action(set)

program
  .command('put <name> <brokers>')
  .description('Add/Replace a kafka cluster by name')
  .action(putCluster)

/*
program
  .command('delete <name>')
  .description('Delete a kafka cluster by name')
  .action(deleteCluster)

program
  .command('offsets <type>')
  .description('Get topic/group offsets and lag')
  .action(offsets)

program
  .command('consumer')
  .description('Consume messages of selected topic')
  .action(consumer)
*/
program
  .command('show [section]')
  .description('Show selected options clusters/config/selected')
  .action(show)

/*
program
  .command('config')
  .description('Update config')
  .action(updateConfig)

program
  .command('metadata <type>')
  .description('Get metadata of topic/groups')
  .action(metadata)

if (config.getBooleanConfig(config.CONFIG_BANNER)) {
  console.log(
    chalk.green(
      figlet.textSync('kcmd', {
        horizontalLayout: 'full',
      })
    )
  )
}
*/

program.parse()
