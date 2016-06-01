'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _veiculo = {

	nome:{
		type:String,
		require:true	
	},
	marca:{
		type:String,
		require:true
	},
	modelo:{
		type:String,
		require:true
	},
	placa:{
		type:String,
		require:true
	}
}

const Veiculo = new Schema(_veiculo);

module.exports = mongoose.model("Veiculo",Veiculo);