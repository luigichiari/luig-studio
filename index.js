const express = require("express");
const path = require("path");

const app = express();

// libera arquivos estáticos (HTML, imagens, CSS)
app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(3000, () => {
  console.log("🚀 Site da Luigi Estúdio rodando: http://localhost:3000");
});