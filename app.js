const workerFunction = array => {

  return new Promise((resolve, reject) => {

  })
}

const forkFunction = array => {

  return new Promise((resolve, reject) => {

  })
}

const main = async () => {
  await workerFunction([25, 19, 48, 30])
  await forkFunction([25, 19, 48, 30])
}

main()