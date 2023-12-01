import React, { useState, useEffect } from "react";
import './dashbord.css'
import axios from 'axios';

function Dashbord() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents();

  }, []);

  const getStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3010/student");
      setStudents(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteStudent = async (userId) => {
    try {
      await axios.delete("http://localhost:3010/student/delete/" + userId );
      getStudents(); 
    } catch (error) {
      console.log(error);
    }
  };

  return (

<div  class = "form-horizontal  col-md-9" >
<div class="row mt-2">
    <div class="col">
    <div class="card mt-2">
      <div class="card-header bg-danger"  >
    <h2 class="display-6 text-center text-white"  > Student Records</h2>
      </div>

      <div class="card-body" >
        <table class="table table-border text-center"   >
      <tr >
       <td class= "bg-dark text-white" >Student name</td>
   <td class= "bg-dark text-white" >GPA</td>
      <td class= "bg-dark text-white" >Remove Student</td>
      </tr>
      <tbody>
     {students.map((student) => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.gpa}</td>
              <td>
                <button onClick={() => deleteStudent(student._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
                    

                   
       </table>
      </div>

     </div>
    </div>

</div>
</div>
    
  );
}

export default Dashbord;
