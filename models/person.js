const mongoose = require('mongoose');

//define person schema
const personsSchema = new mongoose.Schema({

    name: {
        type: String,// datatype kya hai
        // required: true // name hona hi cahiye.
    },
    age: {
        type: Number
    },
    Work: {
        type: String,
        enum: ['chef', 'manager', 'cook'],// work mai yhi teen value save krga 
        // required: true,

    },
    mobile: {
        type: String,
        // required: true
    },
    Email: {
        type: String,
        // required: true,
        // unique: true // unique hona cahiye.
    },
    address: {
        type: String
    },
    Salary: {
        type: Number,
        // required: true
    }

});
//create person model
const Person = mongoose.model('person', personsSchema);
module.exports= Person;