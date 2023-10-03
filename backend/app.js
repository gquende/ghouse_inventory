const express = require("express");

const app = express();
const port = process.env.PORT || 3000;

const homepage = __dirname + "/src/views/index.html";

app.get("/", (req, res) => {
  res.sendFile(homepage);
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
