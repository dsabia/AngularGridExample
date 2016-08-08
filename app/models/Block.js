var mongoose = require('mongoose');

var BlockSchema = new mongoose.Schema({ 
    id: String,
    description: String,
    tooltip: String,
    value: String,
    enabled: Boolean,
    i: Number,
    j: Number
});

var Block = mongoose.model('Block', BlockSchema);

module.exports = Block;