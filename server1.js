const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/app.jpg') { // change the URL path to match your image file
    fs.readFile('./app.jpg', (err, data) => {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('Image not found');
      } else {
        res.writeHead(200, {'Content-Type': 'image/jpeg'});
        res.write(data);
        res.end();
      }
    });
  } else { // serve HTML file
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', (err, data) => {
      if (err) {
        res.end('Error in loading index.html');
      } else {
        res.write(data);
        res.end();
      }
    });
  }
});

server.listen(8080, () => {
  console.log('Server is listening on port 8080');
});
