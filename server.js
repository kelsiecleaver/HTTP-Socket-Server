/*jshint esversion: 6 */
const net = require('net');
const fs = require('fs');

let users = [];
const server = net.createServer((request) => {
  users.push(request);

  request.on('data', (chunk) => {
    process.stdout.write(chunk);
    users.forEach((client) => {
      if(client === request) return;
    });
  });
  process.stdin.on('data', (command) => {
    request.write(command);
  });
});
server.listen(8080, () => {
  console.log('opened server on address');
});