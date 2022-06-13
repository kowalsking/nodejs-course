// const start = performance.now();

// setTimeout(() => {
//   console.log(performance.now() - start)
// }, 1000)

function myFunc(arg) {
  console.log('Arg', arg)
}

setTimeout(myFunc, 1500, 'Cool')