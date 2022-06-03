const mongoose = require('mongoose');

const dallasSchema = new mongoose.Schema({
    name: {type : String, required:true},
    img: {type: String},
    description:{ type: String},
    rating: {type: Number}

});
const Dallas = mongoose.model('Dallas', dallasSchema);
module.exports = Dallas;
