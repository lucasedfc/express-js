const express = require('express');
const router = express.Router();

const products = [
    {
        name: "Black Shoes",
        price: 50
    },
    {
        name: "Red Jacket",
        price: 400
    }
];

router.get('/', function(req, res) {
    res.render("products", { products });
});

module.exports = router;