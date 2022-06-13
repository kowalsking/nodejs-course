// const start = performance.now();

// setTimeout(() => {
//   console.log(performance.now() - start)
// }, 1000)

// function myFunc(arg) {
//   console.log('Arg', arg)
// }

// setTimeout(myFunc, 1500, 'Cool')


const id = setTimeout(() => {
  console.log('BOOM!')
}, 5000)

setTimeout(() => {
  clearTimeout(id)
  console.log('Finished!')
}, 1000)