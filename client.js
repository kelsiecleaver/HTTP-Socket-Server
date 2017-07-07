/*jshint esversion: 6 */

const net = require('net');
const client = net.connect(8080, () => {
  console.log('connected to server');
  client.on('data', (chunk) =>{
    console.log(chunk.toString());

  });
  process.stdin.on('data', (chunk) => {
    client.write(chunk);
  });
});
