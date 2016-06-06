'use strict';

var Lubri = require('../models/lubrificacao.js');

module.exports = function(app) {

	var buscaLuvri = function(req,res) {
		console.log("GET - /api/lubri");

		return Lubri.find(function(err,lubri) {
			if(!err) {
				return res.send(lubri);
			} else {
				res.statusCode = 500;
				console.log("Erro interno",res.statusCode,err.message);
				return res.send({error:"erro no arquivo /routes/lubriciacao.js"});
			}
		})
	};

	var buscaWithPopulate = function(req,res) {
		console.log("GET - /api/lubriPopulate");

		return Lubri.findOne()
			.populate('Veiculo')
			.exec(function(err,lubri){
				if(err) return handleError(err);
				console.log(lubri.veiculo);
			});

	}

	var buscaLuvriPorId = function(req,res) {

	};

	var removeLubri = function(req,res) {
		console.log("DELETE - /api/lubri/:id");
		var id = req.params.id;

		return Lubri.findById({_id:id},function(err,lubri){
			if(!lubri) {
				res.statusCode = 404;
				return res.send({error:"Lubrificação não existe!"});
			}
			return lubri.remove(function(err){
				if(!err) {
					console.log("Lubrificação removida com sucesso!");
					return res.send({status:"OK",lubri:lubri});
				} else {
					res.statusCode = 500;
					console.log("Erro ao tentar remover",res.statusCode,err.message);
					return res.send({error:"Erro no servidor"});
				}
			})
		})
	};

	var adicionarLubri = function(req,res) {
		console.log("POST - /api/lubri");

		var lubri = new Lubri(req.body);
		lubri.save(function(err) {
			if(err) {	
				console.log("erro ao tentar cadastrar"+err);
				res.send({error:err});
			}else {
				console.log("Lubrificação cadastrada com sucesso!");
				res.send({status:'OK',lubri:lubri});
			}
		});
	};

	app.get("/api/lubriPopulate", buscaWithPopulate);
	app.get("/api/lubri", buscaLuvri);
	app.get("/api/lubri/:id", buscaLuvriPorId);
	app.post("/api/lubri", adicionarLubri);
	app.delete("/api/lubri/:id", removeLubri);

};