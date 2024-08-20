import React from "react";
import "./Navbar.css"
import { Link } from "react-router-dom";

const Navbar = ( ) => {

    return(
        <div className="navbar">
            <div className="navbar-logo">
            <Link style={{textDecoration: 'none', color: "black", fontSize: '2rem'}} to="/"><h1>ZOMATO CLONE</h1></Link>
            </div>
            <div className="Navbar-link">
            <ul>
                <li><Link style={{textDecoration: 'none', color: "black"}} to="/">Home</Link></li>
                <li><Link style={{textDecoration: 'none', color: "black"}} to="/menu">Menu</Link></li>
                <li><Link style={{textDecoration: 'none', color: "black"}} to="/about">About</Link></li>
                <li><Link style={{textDecoration: 'none', color: "black"}} to="/contact">Contact</Link></li>
                <li><Link style={{textDecoration: 'none', color: "black"}} to="/login">LoginSignUP</Link></li>
            </ul>
            </div>
        </div>
    )
}

export default Navbar;