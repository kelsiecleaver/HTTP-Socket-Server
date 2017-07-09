/*jshint esversion: 6 */

const net = require('net');

const port = 80;
const host = process.argv[2];

const client = net.createConnection(port, host, () => {
  console.log('connected to server');
});

client.write(`GET / HTTP/1.1
Date: ${new Date().toUTCString()}
Host: ${host}
User-Agent: Kelsie
Connection: close\r\n\r\n`);

  client.on('data', (chunk)=> {
    console.log(chunk.toString().split());
    client.end();
   });



