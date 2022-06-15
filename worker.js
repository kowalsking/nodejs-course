const { parentPort, workerData } = require('worker_threads');
const { compute } = require('./factorial');

console.log('WorkerData', workerData);
parentPort.postMessage(compute(workerData))