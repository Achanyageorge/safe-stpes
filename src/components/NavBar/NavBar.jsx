import "./NavBar.css";
import React, { useState } from "react";
import myImage from "../../logo.png"; // Go up two levels to reach 'src'
function NavBar() {
    const [searchTerm, setSearchTerm] = useState("");
    const [showLogin, setShowLogin] = useState(false);
  return (
    <div className='navbar'>
       <img className="logo" src={myImage} alt="safesteps" />
       <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
    <button className="login-btn" onClick={() => setShowLogin(true)}>Login</button>
    <h1 className="home">Home</h1>

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