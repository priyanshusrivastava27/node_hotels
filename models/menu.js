const mongoose = require('mongoose');

const menuitemSchema = new mongoose.Schema({
    name: {
        type: String,// datatype kya hai
        required: true // name hona hi cahiye.
    },
    price: {
        type: Number,// datatype kya hai
         required: true // name hona hi cahiye.
    },
    taste: {
        type: String,
        enum: ['sweet', 'spicy', 'sour'],// work mai yhi teen value save krga 
        // required: true,

    },
    is_drink:{
        type : Boolean,
        defalut:false
    },
    ingridents: {
        type: String,// datatype kya hai
         required: true // name hona hi cahiye.
    },
    num_sales:{
        type:Number,
        defalut: 0
    },
})


// Create the MenuItem model
const MenuItem = mongoose.model('MenuItem', menuitemSchema); // <-- This line defines the MenuItem model

// Export the MenuItem model
module.exports = MenuItem; // <-- Now MenuItem is correctly defined and exported
