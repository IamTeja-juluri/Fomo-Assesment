const mongoose = require("mongoose")
const coinSchema = new mongoose.Schema({
    name : {
        type : Object
    }
},{
    timestamps:true
})

const coin = mongoose.model('coin',coinSchema)
module.exports = coin