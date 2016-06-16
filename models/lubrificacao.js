'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _lubrificacao = {

	data:{
		type:String,
		require:true
	},
	veiculo:{
		type:Schema.Types.ObjectId,
		ref:'Veiculo',
		require:true
	},
	km_inicial:{
		type:Number,
		require:true
	},
	km_final:{
		type:Number,
		require:true
	},
	litros_abastecidos:{
		type:Number,
		require:true
	},
	custoKm:{
		type:Number,
		require:true
	},
	mediaKm:{
		type:Number,
		require:true
	}
}

const Lubrificacao = new Schema(_lubrificacao);

module.exports = mongoose.model("lubrificacao",Lubrificacao);
