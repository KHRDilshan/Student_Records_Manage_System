const express = require('express');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb://localhost:27017/Student_db');





app.listen(8080, ()=>{
    console.log("server is runing")
});