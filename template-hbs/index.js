const express = require('express');
const app = express();
const productsRouter = require('./routes/products');
const engines = require('consolidate');


app.engine('views', engines.handlebars);
app.set('views', './views');
app.set('view engine', 'hbs');

app.get('/', function(req, res, next){
    res.render('index', {hello: 'hello', world: 'world'});
});

app.use('/products', productsRouter);

const server = app.listen(3000, function() {
    console.log(`Server listening on http://localhost:${server.address().port}`);
});