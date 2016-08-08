var Block = require('../models/Block');

var questions = {
    "language": "it",
    "items":[
    {
        "id": 1,
        "title": 'Chi é #1',
        "description": 'Nome di #1',
        "tooltip": 'Descrizione di #1',
        "i" : 2,
        "j" : 3
    },
    {
        "id": 2,
        "title": 'Chi é #2',
        "description": 'Nome di #2',
        "tooltip": 'Descrizione di #2',
        "i" : 4,
        "j" : 3
    },
    {
        "id": 3,
        "title": 'Chi é #3',
        "description": 'Nome di #3',
        "tooltip": 'Descrizione di #3',
        "i" : 3,
        "j" : 2
    },
    {
        "id": 4,
        "title": 'Chi é #4',
        "description": 'Nome di #4',
        "tooltip": 'Descrizione di #4',
        "i" : 3,
        "j" : 4
    }
  ]
}



module.exports = function (){    
    Block.find().remove();
    console.info("Removed all");

    for(index in questions.items){
        var question = questions.items[index];
        
        var block = new Block({
            _id: question.id,
            title: question.title,
            description: question.description,
            tooltip: question.tooltip,
            i: question.i,
            j : question.j,
            value: null,
            enabled: true
        });
        Block.create(block);
        console.info("Create block " + block);
    }
    console.info("Generation completed");
}