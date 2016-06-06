'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _lubrificacao = {

	data:{
		type:Date,
		require:true
	},
	veiculo:{
		type:Schema.Types.ObjectId,
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