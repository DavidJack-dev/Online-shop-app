const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = mongoose.Schema({
    user: {
        type: Array,
        default: []
    },
    data = {
        type: Array,
        default: []
    },
    product : {
        type: Array,
        default: []
    }
     

}, { timestamps: true })



const Product = mongoose.model('Product', productSchema);

module.exports = { Product }