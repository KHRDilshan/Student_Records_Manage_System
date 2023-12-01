import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import AddStudent from './pages/AddStudent';
import Navbar from './components/Navbar';
import Dashbord from './pages/Dashbord';
import StudentList from './pages/StudentList';
function App() {
  return (
    <div className="App">
     <Router>
     
      <Navbar/>
   <Routes>
      
      <Route path ='/add' element ={<AddStudent/>}/>
      <Route path ='/dashbord' element ={<Dashbord/>}/>
      <Route path ='/studentlist' element ={<StudentList/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
