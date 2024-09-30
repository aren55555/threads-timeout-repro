import { spawn, Worker } from "threads"

const main = async () => {
  console.log('START MAIN', { now : new Date() });

  const worker = await spawn(new Worker("./worker"), {
    timeout: 1000, // 1 second
  })

  const workerResult = await worker.dies()
  console.log('MAIN got result from WORKER', { workerResult })

  console.log('END MAIN', { now : new Date() });
}

main();