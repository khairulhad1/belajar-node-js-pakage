import http from "node:http";

// Create a local server to receive data from
const server = http.createServer();

// Listen to the request event
server.on("request", (request, res) => {
  const body = "hello world";
  res.writeHead(200, {
    //   "Content-Length": Buffer.byteLength(body),
    "Content-Type": "text/html ",
  });
  res.write(body);
  res.end();
});

server.listen(8000);
console.log("server listen on poort 8000....");
