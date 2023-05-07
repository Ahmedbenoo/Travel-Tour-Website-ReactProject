import React from "react";
import './App.css';
import Navbar from "./Components/NavBar/Navbar";
import Main from "./Components/Main/Main";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";


function App() {
  return (
    <div className="App">
    <Navbar />
    <Home />
    <Main />
    <Footer />
    
    </div>
  );
}

export default App;
