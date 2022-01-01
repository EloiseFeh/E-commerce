const express = require('express');
const app = express();
const path = require('path');
const cors = require("cors");
const pool = require("./database")

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/jwtAuth"));
app.use("/dashboard", require("./routes/dashboard"));

//operacao de alteracao de dados do usuario, seja ele adm ou nao
app.use("/perfil", require("./routes/perfil"));

//visualizacao de produtos
app.use("/produtos", require("./routes/produtosVisual"));

//operacoes adm
//app.use("/admProdutos", require("./routes/admProdutos"));
//app.use("/admCategorias", require("./routes/admCategorias"));

app.listen(process.env.PORT || 5000);
console.log("server on!");