const Clientes = require("../model/cliente");

exports.post = (req, res) => {
    const cliente = new Clientes(req.body)
  
    cliente.save(function(err){
      if(err) res.status(500).send(err)
  
      res.status(201).send(cliente)
  
    })
  }


  