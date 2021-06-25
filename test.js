const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const productSchema = new Schema({

    firstname:String,
    lastname:String,
    price:Number,
    // id: String,
    // name: String,
    // description: String,
    // detail: String,
    // category: String,
    // img: String,
    // gallery: [],
    // onSale: Boolean,
    // costPrice: Number,
    // inStock: Boolean,
    // option: [],
    // salePrice: Number,
  },
}, { timestamps: true })
module.exports = mongoose.model('test', testSchema);

mongodb+srv://ragefan:NFT.rage.fan@nft.fqkmv.mongodb.net/rage?w=majority