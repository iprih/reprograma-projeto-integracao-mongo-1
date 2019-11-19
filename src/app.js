const express = require("express")
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
const clientes = require("./routes/clientesRoute")

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  )
  next()
})

app.use(bodyParser.json())
app.use("/clientes", clientes)
module.exports = app
