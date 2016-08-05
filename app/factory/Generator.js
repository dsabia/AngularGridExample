var Block = require('../models/Block');

var num1 = new Block({
    id: '1',
    description: 'Nome di #1',
    tooltip: 'Descrizione di #1',
    value: null,
    enabled: true
    });


module.exports = function (){
    Block.create(num1);    
}