const { model, Schema,  } = require('../connection');

const mySchema = new Schema({
    title : String,
    brand : { type : String },
    model : { type : String },
    price : { type : Number, require : true},
    image: String,

    createdAt : { type : Date, default: Date.now }
});

module.exports = model('products', mySchema);