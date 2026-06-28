import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });

    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });

    res.end("About Page");
  } else if (req.url === "/contact-me" && req.method === "GET") {
    res.writeHead(200, {
      "content-type": "text/plain",
    });

    res.end("Contact Me");
  } else {
    res.writeHead(404, {
      "content-type": "text/plain",
    });

    res.end("404 - Page Not Found");
  }
});

server.listen(3000, () => console.log("Server is running!"));
