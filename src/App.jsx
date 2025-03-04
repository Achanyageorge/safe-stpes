import React from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import "./App.css"
import Banner from "./components/Banner/Banner.jsx";
import RowPost from "./components/RowPost/RowPost.jsx";
function App() {
  return (
    <div className="app">
     <NavBar/>
     <Banner/>
     <RowPost/>
     
    </div>
  );
}

export default App;
