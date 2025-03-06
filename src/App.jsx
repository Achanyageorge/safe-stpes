import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css"
import Banner from "./components/Banner/Banner.jsx";
import RowPost from "./components/RowPost/RowPost.jsx";
import Footer from "./components/Footer/Footer.jsx";
function App() {
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost/>
     <Footer/>
    </div>
  );
}

export default App;
