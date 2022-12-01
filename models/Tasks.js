const mongoose = require("mongoose")
const Schema = mongoose.Schema

//const Schema = require("mongoose").Schema

const TaskSchema = new Schema({
    title: {
        type:String,
        required: true,
        unique:true,
        minlength: 3
    },
    description: {
        type:String,
        required: true,
    },
    completed:{
        type: Boolean,
        default: false,
    },
},
    { timesstamp:true}
);

module.exports = mongoose.model("Task", TaskSchema);