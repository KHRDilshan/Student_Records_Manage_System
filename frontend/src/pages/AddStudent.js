import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './addstudent.css'
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function AddStudent() {

  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [gender, setGender] = useState('');
  const [dbm, setDbm] = useState('');
  const [esd, setEsd] = useState('');
  const [cl, setCl] = useState('');
  const [ml, setMl] = useState('');
  const [iot, setIot] = useState('');
  const [gpa, SetGpa] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    event.preventDefault();
    
    axios.post( 'http://localhost:3010/student/add', {name, id, gender, dbm,esd,cl,ml,iot,gpa })
    .then(result => {
        console.log(result);
        if(result.data === "Already Added"){
            alert("Please Check Again.")
        }
        else{
            alert("Student Adding Success.")
        }
        navigate("/dashbord");
        
    })
    .catch(err => console.log(err))
    ;
}
function gpaCal(){
  const gpd= (dbm*2 +esd*3 +cl*2 + ml*2 + iot*3);
  SetGpa(gpd/12)
}

  return (
    <div className="student_container">
    <div className="hedding">ADD STUDENTS</div>
    <form className='studentform' onSubmit={handleSubmit} >
    <div class="form-group">
      <label >Student Name</label>
      <input type="text" class="form-control"  placeholder="Student Name" onChange={(event)=>setName(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Student ID</label>
      <input type="text" class="form-control" id="" placeholder="Student ID" onChange={(event)=>setId(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Student Gender</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setGender(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Database Management Marks</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setDbm(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">ESD Marks</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setEsd(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Cloud Marks</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setCl(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">Machine Learning Marks</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setMl(event.target.value)}/>
    </div>
    <div class="form-group">
      <label for="exampleInputPassword1">IOT Marks</label>
      <input type="text" class="form-control" id="" placeholder="" onChange={(event)=>setIot(event.target.value)}/>
    </div>
    <button type="submit" onClick={(event)=>gpaCal(event.target.value)} class="sub btn btn-primary">Submit</button>
  </form>
  </div>
  )
}

export default AddStudent