import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css"
import Banner from "./components/Banner/Banner.jsx";
import RowPost from "./components/RowPost/RowPost.jsx";
import Footer from "./components/Footer/Footer.jsx";
import SexEdu from "./components/SexEdu/SexEdu.jsx";
import { useState } from "react"; 
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  const [state,setStte] = useState('')
  return (
    <div className="app">
     <NavBar/>
     <Routes>
     
     <Route path="/" element={<><Banner /><RowPost /></>} /> 
        <Route path="/sex-education" element={<SexEdu />} />
      </Routes>
     <Footer/>
    </div>
  );
}

export default App;
