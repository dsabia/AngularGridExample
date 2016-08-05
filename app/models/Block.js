var mongoose = require('mongoose');

var BlockSchema = new mongoose.Schema({ 
    id: String,
    description: String,
    tooltip: String,
    value: String,
    enabled: Boolean
});

var Block = mongoose.model('Block', BlockSchema);

module.exports = Block;