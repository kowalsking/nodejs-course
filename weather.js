#!/urs/bin/env node

import { getArgs } from './helpers/args.js'
import { getWeather } from './services/api.service.js'
import { printHelp, printSuccess, printError, printWeatherData } from './services/log.service.js'
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage.service.js'

const saveToken = async token => {
  if (!token.length) {
    return printError('No token!')
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token)
    printSuccess('Token saved')
  } catch (e) {
    printError(e.message)
  }
}

const saveCity = async city => {
  if (!city.length) {
    return printError('No city!')
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city)
    printSuccess('City saved')
  } catch (e) {
    printError(e.message)
  }
}

const getForcast = async () => {
  try {
    const weather = await getWeather(await getKeyValue(TOKEN_DICTIONARY.city))
    printWeatherData(weather)
  } catch (e) {
    if (e?.response?.status === 404) {
      printError('Bad city')
    } else if (e?.response?.status === 401) {
      printError('Bad token')
    } else {
      printError(e.message)
    }
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }

  if (args.s) {
    return saveCity(args.s)
  }

  if (args.t) {
    return saveToken(args.t)
  }

  getForcast()
}

initCLI()