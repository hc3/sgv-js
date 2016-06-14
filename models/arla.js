'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _arla = {
  data_abastecimento:{
    type:Date,
    require:true
  },
  km_anterior:{
    type:Number
  },
  km_atual:{
    type:Number,
    require:true
  },
  km_rodado:{
    type:Number,
    require:true
  },
  qnt_litros:{
    type:Number,
    require:true
  },
  media_consumo:{
    type:Number,
    require:true
  },
  veiculo:{
    type:Schema.Types.ObjectId,
    ref:'Veiculo',
    require:true
  },
  valor_abastecimento:{
    type:Number,
    require:true
  }
};

const arla = new Schema(_arla);
module.exports = mongoose.model("arla",arla);
