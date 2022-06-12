import log, { characters, greet as hello } from './characters.mjs'

for (const c of characters) {
  hello(c)
}

log()