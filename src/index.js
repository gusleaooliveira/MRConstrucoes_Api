const express = require("express");
const rotaContatos = require("./rotas/Contatos");
const rotaImagens = require("./rotas/Imagens");
const app = express();


app.use(rotaContatos);
app.use(rotaImagens);

app.listen(process.env.PORT || 5000);
