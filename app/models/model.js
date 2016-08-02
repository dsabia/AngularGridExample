/*var mongoose = require('mongoose');

var block_schema = new mongoose.Schema({ 
    id: String,
    description: String,
    tooltip: String,
    value: String,
    enabled: Boolean
});

module.exports = mongoose.model('Block', block_schema);
*/

var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
    text: {
        type: String,
        default: ''
    }
});
