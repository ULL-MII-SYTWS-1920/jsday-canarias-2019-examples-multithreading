// sending-message-from-worker.js

console.log('worker started');

onmessage = (message) => {
  console.log('Worker received: ', message);
  postMessage('Message from worker!'+message.data);
};

