import { expose } from "threads/worker"

const sleep = (ms: number) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

expose({
  sleeper: async () => {
    console.log('WORKER START', { now : new Date() });
    await sleep(30000); // 30 seconds
    console.log('WORKER END', { now : new Date() });
    return 'value from worker';
  },
  dies: async () => {
    console.log('WORKER exits', { now : new Date() });
    process.exit(0);
  },
});
