const mongoose = require('mongoose');
const stockSchema = new mongoose.Schema({
    symbol: {
        type: String,
        required: [true, 'stock symbol is required'],
        maxlength: [4, 'max 4 chars'],
        unique: true
        },
    name: String,
    market: {
        type: String,
        maxlength: [4, 'max 4 chars'],
    },
    sector: String

});
module.exports = mongoose.model('Stock', stockSchema, 'stocks');