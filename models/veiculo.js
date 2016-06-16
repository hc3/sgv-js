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
	},
	nroChassi:{
		type:String,
		require:true
	},
	renavam:{
		type:Number,
		require:true
	},
	km_aquisisao:{
		type:Number,
		require:true
	},
	km_atual:{
		type:Number,
		require:true
	}
}

const Veiculo = new Schema(_veiculo);

module.exports = mongoose.model("Veiculo",Veiculo);
