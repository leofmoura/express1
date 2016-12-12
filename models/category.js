var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        index: {
            unique: true
        }
    }
});

var category = mongoose.model('category', categorySchema);

module.exports = {
    Category: category
};
