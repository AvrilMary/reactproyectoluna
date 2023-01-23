import React from "react";
//Import React Router Dom!!!

export default function Banner () {
    return (
        <header>
        <div className="content-wrapper">
            <figure>
                <img className= "logo" src="../images/precicleLogo.png" alt="precicle logo"/>
            </figure>
    
          <div className="menu-bar">
            <div className="hamburgerMenu">
              <i className="fas fa-bars"></i>
            </div>
            <div className="exitMenu hide">
              <i className="fas fa-times"></i>
            </div>
          </div>
          <nav>
            <ul className="nav-list hide">
              <li><a href="index.html">Home</a></li>
              <li><a href="nuestraHistoria/index.html">Nuestra Historia</a></li>
              <li><a href="retreats/index.html">Retreats</a></li>
              <li><a href="recursos/index.html">Recursos</a></li>
              <li><a href="contacto/index.html">Contacto</a></li>
            </ul>
          </nav>
    </div>
  </header>
    
    )
}