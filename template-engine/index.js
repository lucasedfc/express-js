const express = require('express');
const app = express();
const expressJsx = require('./express-jsx');

app.engine("jsx", expressJsx);
app.set("views", "./views");
app.set("view engine", "jsx");

app.get('/', function(req, res) {
    res.render("index", {hello: 'Hi', world: 'World'});
});

const server = app.listen(8000, function() {
    console.log(`Listening on http://localhost:${server.address().port}`);
});