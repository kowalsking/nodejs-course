#!/urs/bin/env node

import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.service.js'
import { saveKeyValue, printSuccess, printError } from './services/storage.service.js'

const saveToken = async token => {
  if (!token.length) {
    printError('No token!')
  }
  try {
    await saveKeyValue('token', token)
    printSuccess('Token saved')
  } catch (e) {
    printError(e.message)
  }
}

const initCLI = () => {
  const args = getArgs(process.argv)
  if (args.h) {
    printHelp()
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    return saveToken(args.t)
  }

  // show weather
}

initCLI()