const Product = require('../models/product.model');

module.exports = {

// Create --------------------------------------------------------------------------

createProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => 
                res.json(newProduct))
            .catch((err) => {
                console.log(err)
            });
    },

// Read ---------------------------------------------------------------------------

getAllProducts: (req, res) => {
    Product.find({})
    .then((allProducts) => 
        res.json(allProducts))
    .catch((err) => {
        console.log(err)
        });
    },

getOneProduct: (req, res) => {
    Product.findOne({ _id: req.params.id })
        .then((oneProduct) =>
            res.json(oneProduct))
        .catch((err) => {
            console.log(err)
        });
    },

// Update ----------------------------------------------------------------------------

updateProduct: (req, res) => {
    Product.findByIdAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true, })
        .then((updatedProduct) =>
            res.json(updatedProduct))
        .catch((err) =>
            res.json(err))
    },

// Delete ---------------------------------------------------------------------------

deleteProduct: (res, req) => {
    Product.deleteOne({ _id: req.params.id })
        .then(deletedProduct => res.json(deletedProduct))
        .catch(err => res.json(err))
}
};