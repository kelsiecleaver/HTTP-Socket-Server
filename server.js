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
        writeHeader(request, '200 OK', 'text/html', indexHTML);
        request.end();
        break;

        case '/404':
        case '/404.html':
        writeHeader(request, '200 OK', 'text/html', 404);
        request.end();
        break;

        case 'helium':
        case '/helium.html':
        writeHeader(request, '200 OK', 'text/html', heliumHTML);
        request.end();
        break;

        case 'hydrogen':
        case '/hydrogen.html':
        writeHeader(request, '200 OK', 'text/html', hydrogenHTML);
        request.end();
        break;

        case 'cssStyles':
        case '/sytles.css':
        writeHeader(request, '200 OK', 'text/css',
          cssStylesHTML);
        request.end();
        break;
    }
  });
});

server.listen(8080, () => {
  console.log('opened server on address');
});






