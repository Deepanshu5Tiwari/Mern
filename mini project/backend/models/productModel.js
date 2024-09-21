const{model,schema, Schema}=require('../connection');
const mySchema = new Schema({
    title : String,
    brand : { type : String },
    category : { type : String, default : 'Unknown'},
    quantity : { type : Number },
    price : { type : Number, require : true},
    image: String,

    createdAt : { type : Date, default: Date.now }
});

module.exports = model('product', mySchema);