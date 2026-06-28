import http from "http";

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  res.end("Server is running!");
});

server.listen(3000, () => console.log("Server is running!"));
