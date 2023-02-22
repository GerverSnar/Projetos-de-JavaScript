const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Bem-vindo ao meu servidor!");
    res.end();
  } else if (req.url === "/sobre") {
    res.write("Sobre mim");
    res.end();
  } else {
    res.write("Página não encontrada!");
    res.end();
  }
});

server.listen(3000);