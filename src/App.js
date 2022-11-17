import "./App.css";
import Navbar from "./Shared/Navbar";
import { Route, Router, Routes } from "react-router-dom";
import Home from "./Home_Page/Home";
import About from "./About_Page/About";
import Footer from "./Shared/Footer";
import Login from "./Login-signup_Page/Login";
import SignUp from "./Login-signup_Page/SignUp";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RequireAuth from "./Login-signup_Page/RequireAuth";
import VideoDetails from "./VideoDetail_Page/VideoDetails";
import Dashboard from "./Dashboard_Page/Dashboard";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home></Home>}></Route>

        {/* About Page */}
        <Route path="/about" element={<About></About>}></Route>

        {/* Login SignUp page */}
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/video-detail" element={<VideoDetails></VideoDetails>}></Route>

        {/* Private Routes */}
        <Route
          path="/product/id"
          element={
            <RequireAuth>
              <VideoDetails></VideoDetails>
            </RequireAuth>
          }
        ></Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard></Dashboard>
            </RequireAuth>
          }
        ></Route>
      </Routes>
      {/* Footer */}
      <Footer></Footer>
      <ToastContainer></ToastContainer>
      
    </div>
  );
}

export default App;
