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

const printWeather = (data) => {
  return console.log(dedent`${chalk.bgYellow(' W E A T H E R ')}
    Soo.. temperature: ${data.main.temp} but feels like ${data.main.feels_like}!
    Outside we have ${data.weather[0].main.toLowerCase()}, ${data.weather[0].description} to be honest...
    Нехай проблеми та невзгоди не роблять вам в житті погоди!
  `)
}

export { printError, printSuccess, printHelp, printWeather as printWeatherData }