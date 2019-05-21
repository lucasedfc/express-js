const express = require('express');
const app = express();

app.get('/', function(req, res, next) {
    res.send({
        'message': 'Hello World'
    });
});

const server = app.listen(8000, function(){
    console.log(`Server listening on http://localhost:${server.address().port}`);
});