const app = require("express") ();
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(cors());

const port = process.env.PORT || 6000;

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected To Database");
})

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

// app.use(function(req, res) {
//     res.status(404).send({url: req.originalUrl + ' not found'}) 
// });

const studentRouter = require("./routes/students.js");
//http://localhost:6000/routes/student
app.use('/student', studentRouter);

// app.use('/',)

// app.get("/",(req, res)=>{
//     res.send('API started')
// })

app.listen(port, () => {
    console.log("Studen Management System API Started On Port " + port);
})