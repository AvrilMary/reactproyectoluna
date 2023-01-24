import React from "react";
import logo from "./precicleLogo.png";
import NavBar from "./nav";


export default function Banner () {
    return (
        <header>
        <div className="content-wrapper">
            <figure>
                <img className= "logo" src={logo} alt="precicle logo"/>
            </figure>
        <NavBar/>   
    </div>
  </header>
    
    )
}