import './App.css';
import Navbar from './Shared/Navbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './Home/Home';
import About from './About/About';
import Footer from './Shared/Footer';
import Login from './Login-signup/Login';
import SignUp from './Login-signup/SignUp';

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* Home Page */}
        <Route path='/' element={<Home></Home>} ></Route>

        {/* About Page */}
        <Route path='/about' element={<About></About>} ></Route>

        {/* Login SignUp page */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>

        {/* Private Routes */}
        <Route>
          
        </Route>

      </Routes>
      {/* Footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
