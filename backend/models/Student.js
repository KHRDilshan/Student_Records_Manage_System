const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const studentSchema = new Schema({
    name : { 
        type: String,
        required: true
    },
    id:{
        type:Number,
        required:true,
    },
    gender:{
        type:String,
        required:true,
    },
    dbm:{
        type:Number,
        required:true,
    },
    
    esd:{
        type:Number,
        required:true,
    }
    ,
    cl:{
        type:Number,
        required:true,
    },
    
    ml:{
        type:Number,
        required:true,
    },
    
    iot:{
        type:Number,
        required:true,
    },
    
    
    gpa:{
        type:Number,
        required:true,
    },
})
const student = mongoose.model('Student',studentSchema);
module.exports = student;
