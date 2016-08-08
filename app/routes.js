var Block = require('./models/Block');
var Generator = require('./factory/Generator');

function getBlocks(res) {
    Block.find(function (err, blocks) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(blocks); // return all blocks in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all blocks
    app.get('/api/grid', function (req, res) {
        // use mongoose to get all todos in the database
        getBlocks(res);
    });

    // create all blocks and send them back after creation
    app.post('/api/grid', function (req, res) {
        console.info('POST CALLED')
        //do nothing 
    });

    // delete a block
    app.delete('/api/grid/:block_id', function (req, res) {
        Block.remove({
            _id: req.params.block_id
        }, function (err, todo) {
            if (err)
                res.send(err);

            getBlocks(res);
        });
    });

    // application -------------------------------------------------------------
    app.get('*', function (req, res) {
        res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    });
};
