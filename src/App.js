import logo from './logo.svg';
import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Router } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Router>
        <Route path='/' element={<Home></Home>} ></Route>
        <Route path='/about' element={<About></About>} ></Route>
      </Router>
    </div>
  );
}

export default App;
