const mongoose = require('mongoose');
const investorSchema = new mongoose.Schema({
    name: {type: String, require: [true, 'Name is required']},
    taxId: {
        type: String, 
        required:[true, 'Tax Id required'],
        maxlength: [10, '10 chars long format: xx-yyyyyyy'],
        unique: true
    },
    investmentSectors: {type: Array}
});
module.exports = mongoose.model('Investor', investorSchema, 'investors');