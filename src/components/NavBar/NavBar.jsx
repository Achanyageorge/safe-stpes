import "./NavBar.css";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import myImage from "../../images/logo.png";// Go up two levels to reach 'src'
function NavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showLogin, setShowLogin] = useState(false);
    const navigate = useNavigate(); 
  return (
    <div className='navbar'>
       <img className="logo" src={myImage} alt="safesteps"  />
       <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
    <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
    <h1 className="home" onClick={() => navigate("/")}>Home</h1>
    {/* Login Form (Popup) */}
    {showLogin && (
    <div className="login-popup">
        <div className="login-form">
          <h2>Login</h2>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <button>Submit</button>
          <button className="close-btn" onClick={() => setShowLogin(false)}>Close</button>
       </div>
   </div>
)}
</div>
  )
}


export default NavBar
