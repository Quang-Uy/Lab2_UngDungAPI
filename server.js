const http = require('node:http'); //Import thư viện
const hostname = '127.0.0.1'; // localhost
const port = 3000; //cổng lắng nghe server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.write('NodeJS - Bai 1\n');
  res.write('Tạo project HelloWorld bằng NodeJS\n');
  res.end();
});
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});