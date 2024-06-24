const mongoose = require('mongoose');

// Define schema
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String
    },
    description: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default:'default.jpg'
    },
    rating: {
        rate: {
            type: Number,
            default: 0
        },
        count: {
            type: Number,
            default: 0
        }
    }
});


const Product = mongoose.model('Product', productSchema);

module.exports = Product;
