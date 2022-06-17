import chalk from 'chalk'
import dedent from 'dedent-js'

const printError = (error) => {
  console.log(chalk.bgRed('ERROR'), error)
}

const printSuccess = (success) => {
  console.log(chalk.bgGreen('SUCCESS'), success)
}

const printHelp = () => {
  console.log(
    dedent`${chalk.bgCyan(' HELP ')}
    No parameters - showing weather
    -s [CITY] for city saving
    -h for help
    -t [API_KEY] for token saving`
  )
}

export { printError, printSuccess, printHelp }