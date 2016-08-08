var Block = require('../models/Block');

/*
var num1 = new Block({
    id: '1',
    description: 'Nome di #1',
    tooltip: 'Descrizione di #1',
    value: null,
    enabled: true
    });
*/

var questions = {
    "language": "it",
    "items":[
    {
        "id": '1',
        "description": 'Nome di #1',
        "tooltip": 'Descrizione di #1',
        "i" : 3,
        "j" : 2
    },
    {
        "id": '2',
        "description": 'Nome di #2',
        "tooltip": 'Descrizione di #2',
        "i" : 3,
        "j" : 4
    },
    {
        "id": '3',
        "description": 'Nome di #3',
        "tooltip": 'Descrizione di #3',
        "i" : 3,
        "j" : 2
    },
    {
        "id": '4',
        "description": 'Nome di #4',
        "tooltip": 'Descrizione di #4',
        "i" : 3,
        "j" : 4
    }
  ]
}



module.exports = function (){    
    Block.remove( { } );
    /*
    console.log(questions);
    console.log(questions.items);
    console.log(questions.language);
    console.log(questions.items[0]);
    console.log(questions.items[0].tooltip);
    */
    
    
    for(index in questions.items){
        console.info(index);
        
        var question = questions.items[index];
        
        console.info(question);
        
        var block = new Block({
            id: question.id,
            description: question.description,
            tooltip: question.tooltip,
            value: null,
            enabled: true
        });
        Block.create(block);
    }
}