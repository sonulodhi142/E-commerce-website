import React from "react";
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Contact from "./pages/contactus";
import ShopCantaxtProvider from "./Contaxt/context";
import Home from "./pages/Home";
import Login from "./pages/Login";
  

function App() {

  return (
    <ShopCantaxtProvider>
    <div className="app">
     
      <div>
      <Navbar/>
      </div>

      <div className="path">
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/menu" element={<Menu/>}></Route>
        <Route path="/about" element={<About/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/login" element={<Login/>} ></Route>
      </Routes>
      </div>
    </div>
    </ShopCantaxtProvider>
  );

}
export default App;
