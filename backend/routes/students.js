const router = require('express').Router();
let Student = require('../models/Student');

//http://localhost:6000/student/add
router.route('/add').post((req,res)=>{

    const name = req.body.name;
    const id = Number(req.body.id);
    const dbm = (req.body.dbm);
    const esd = (req.body.esd);
    const cl = (req.body.cl);
    const ml = (req.body.ml);
    const iot = (req.body.iot);
    const gpa = (req.body.gpa);
    const gender = req.body.gender;
    const newStudent = new Student({
        name:name,
        id:id,
        dbm:dbm,
        esd:esd,
        cl:cl,
        ml:ml,
        iot:iot,
        gender:gender,
        gpa:gpa
    
    })
    const data = newStudent.save();
    if(data){
        res.json("Student Added")
    }
    else{
        res.json("Error while add student")
    }
       
    
})

router.route('/').get((req,res)=>{
    Student.find().then((students)=>{
        res.json(students)
    }).catch((err)=>{
        console.log(err)
    })
})



    router.route('/delete/:id').delete(async (req,res)=>{
        let userId = req.params.id;
        await Student.findByIdAndDelete({_id:userId}).then(()=>{
            res.status(200).send({status:"User deleted"});

        }).catch((err)=>{
            console.log(err.message);
            res.status(500).send({status: "Error with delete user, error: err.message"});
        })
    })

module.exports = router;