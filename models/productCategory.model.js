const mongoose = require("mongoose");
const productsSchema = new mongoose.Schema({
    categoryId: {type: mongoose.Schema.Types.ObjectId, ref: '_id'},
    productId:  {type: mongoose.Schema.Types.ObjectId, ref: 'product_id'},
    categoryName: {type: String}
}, {timestamps: true});
const ProductCategory = mongoose.model('ProductCategory', productsSchema, 'categories');



module.exports = ProductCategory;




