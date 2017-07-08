/*jshint esversion: 6 */
const net = require('net');
const fs = require('fs');

  const index = fs.readFileSync('./index.html');
  const error404 = fs.readFileSync('./404.html');
  const helium = fs.readFileSync('./helium.html');
  const hydrogen = fs.readFileSync('./hydrogen.html');
  const cssStyles = fs.readFileSync('./css/styles.css');


const server = net.createServer( (request) => {
  request.on('data', (data) => {
    const dataArr = data.toString().split(`\n`);
    const requestLine = dataArr[0].split(` `);
    const path = requestLine[1];

    switch(path) {
      case '/':
      case '/index':
      case '/index.html':
        showHeader(request, '200 OK', 'text/html', index);
        request.end();
        break;

        case '/404':
        case '/404.html':
        showHeader(request, '200 OK', 'text/html', error404);
        request.end();
        break;

        case 'helium':
        case '/helium.html':
        showHeader(request, '200 OK', 'text/html', helium);
        request.end();
        break;

        case 'hydrogen':
        case '/hydrogen.html':
        showHeader(request, '200 OK', 'text/html', hydrogen);
        request.end();
        break;

        case 'cssStyles':
        case '/css/styles.css':
        showHeader(request, '200 OK', 'text/css',
          cssStyles);
        request.end();
        break;
    }
  });
});

const showHeader = (request, status, fileType, fileName) => {
  request.write(`HTTP/1.1 ${status}
Server: Kelsie's Server
Date: ${new Date().toUTCString()};
Content-Type: ${fileType}; charset=utf-8
Content-Length: ${fileName.length}
Connection: keep-alive

${fileName}`);
};

server.listen(8080, () => {
  console.log('opened server on address');
});

//hello/







