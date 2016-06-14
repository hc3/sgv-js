'use strict';

var Arla = require('../models/arla.js');

module.exports = function(app) {

  var buscaArla = function(req,res) {
    console.log("GET - /api/arla");

    return Arla.find(function(err,arla){
      if(!err) {
        return res.send(arla);
      } else {
        res.statusCode = 500;
        console.log("Erro interno",res,statusCode,err.message);
        return res.send({error:"Erro no arquivo /routes/arla"});
      }
    })
  };

  var buscaWithPopulate = function(req,res) {
    console.log("GEt - /api/arlaPopulate");

    return Arla.find()
      .populate('veiculo')
      .exec(function(err,arla){
        if(err) return handleError(err);
        return res.send(arla);
      })
  };

  var removeArla = function(req,res) {
    console.log("DELETE - /api/arla/:id");

    var id = req.params.id;

    return Arla.findById({_id:id},function(err,arla){
      if(!arla) {
        res.statusCode = 404;
        return res.send({error:"Arla não cadastrado"});
      }
      return arla.remove(function(err){
        if(!err){
          console.log("Arla removido com sucesso");
          return res.send({status:"OK",arla:arla});
        } else {
          res.statusCode = 500;
          console.log("Erro ao tentar remover",res.statusCode,err.message);
          return res.send({error:"erro no servidor"});
        }
      })
    })
  };

  var adicionarArla = function(req,res) {
    console.log("POST - API /api/arla");

    var arla = new Arla(req.body);
    arla.save(function(err){
      if(err) {
        console.log("erro ao tentar cadastrar"+err);
        res.send({error:err});
      }else {
        console.log("Abastecimento cadastrado com sucesso");
        res.send({status:"OK",arla:arla});
      }
    })
  };

  app.get("/api/arla",buscaArla);
  app.get("/api/arlaPopulate",buscaWithPopulate);
  app.post("/api/arla",adicionarArla);
  app.delete("/api/arla/:id",removeArla);

};
