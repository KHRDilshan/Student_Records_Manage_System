import React from 'react'
import { Link } from 'react-router-dom'
import img1 from './images/OLG05qvJROmDuK2i.png';
import './navbar.css'

function Navbar() {
  return (
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">

  <a class="navbar-brand" href="#" ><img class='logo' src={img1}></img></a>

  <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      <li class="nav-item active">
      <Link class="nav-link" to='/dashbord'>Dashbord</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/add'>Add Student</Link>
      </li>
      <li class="nav-item">
      <Link class="nav-link" to='/studentlist'>Students</Link>
      </li>
    </ul>
  </div>
</nav>


 

  )
}


export default Navbar
