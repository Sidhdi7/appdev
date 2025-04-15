// index.js
const http = require('http');
const server = http.createServer((req, res) => {
  res.end("Hello from Minikube!");
});
server.listen(8080, () => console.log("Listening on port 8080"));
