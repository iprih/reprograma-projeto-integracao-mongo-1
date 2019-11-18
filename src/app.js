const express = require("express") // pra que o express
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const app = express()

//declara a propriedade
mongoose.connect("mongodb://localhost:27017/clientes", {useNewUrlParser: true});

//aqui ele tenta fazer a conexao
const db = mongoose.connection;
db.on("error", console.log.bind(console, "connection error:"))
db.once("open", function(){
  console.log("conexão feita com sucesso.")
})


//rotas
const cliente = require("./routes/clientesRoute")


app.use(bodyParser.json())
app.use("/cliente", cliente)
module.exports = app
