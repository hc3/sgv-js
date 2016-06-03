'use strict';

var Veiculo = require('../models/veiculo.js');

module.exports = function(app) {

	var buscarVeiculos = function(req,res) {
		console.log("GET - /API/veiculos");

		return Veiculo.find(function(err,veiculo) {
			if(!err) {
				return res.send(veiculo);
			}else {
				res.statusCode = 500;
				console.log("Erro interno",res.statuscode,err.message);
				return res.send({error:"erro no arquivo /routes/veiculo.js"});
			}
		});
	};

	var buscarVeiculoPorId = function(req,res) {
		console.log("GET - /API/veiculos:id");
		var id = req.params.id;
		return Veiculo.findById({_id:id},function(err,veiculo){
			if(!veiculo) {
				res.statusCode = 404;
				return res.send({error:"Veiculo não existe!"});
			}
			if(!err) {
				return res.send({status:"OK",veiculo:veiculo});
			} else {
				res.statusCode = 500;
				console.log("Erro interno: ",res.statusCode,err.message);
				return res.send({error:"erro no arquivo /routes/veiculo.js"});
			}
		});
	};

	var removeVeiculo = function(req,res) {
		console.log("DELETE - /API/veiculos:id");
		var id = req.params.id;
		return Veiculo.findById({_id:id},function(err,veiculo) {
			if(!veiculo) {
				res.statusCode = 404;
				return res.send({error:"Veiculo não existe!"});
			}
			return veiculo.remove(function(err) {
				if(!err) {
					console.log("Veiculo removido com sucesso!");
					return res.send({status:"OK",veiculo:veiculo});
				} else {
					res.statusCode = 500;
					console.log("Erro ao tentar remover",res.statusCode,err.message);
					return res.send({error:"Erro no servidor"});
				}
			})
		})
	};

	var adicionarVeiculo = function(req,res) {
		console.log("POST - /API/veiculo");

		var veiculo = new Veiculo(req.body);
		veiculo.save(function(err) {
			if(err) {
				console.log("erro ao tentar cadastrar"+err);
				res.send({error:err});
			}else {
				console.log("Veiculo cadastrado com sucesso!");
				res.send({status:'OK',veiculo:veiculo});
			}
		});
	};

	app.get("/api/veiculos",buscarVeiculos);
	app.get("/api/veiculos/:id",buscarVeiculoPorId);
	app.post("/api/veiculo",adicionarVeiculo);
	app.delete("/api/veiculos/:id",removeVeiculo);

};