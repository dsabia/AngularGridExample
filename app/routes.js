var Block = require('./models/Block');
var Generator = require('./factory/Generator');

function getBlocks(res) {
    Block.find(function (err, todos) {

        // if there is an error retrieving, send the error. nothing after res.send(err) will execute
        if (err) {
            res.send(err);
        }

        res.json(todos); // return all todos in JSON format
    });
}
;

module.exports = function (app) {

    // api ---------------------------------------------------------------------
    // get all todos
    app.get('/api/grid', function (req, res) {
        // use mongoose to get all todos in the database
        getBlocks(res);
    });

    // create todo and send back all todos after creation
    app.post('/api/grid', function (req, res) {
        console.info('POST CALLED')
        Generator();
    });

    // delete a todo
    app.delete('/api/grid/:todo_id', function (req, res) {
        Block.remove({
            _id: req.params.todo_id
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
