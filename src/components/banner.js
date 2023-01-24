import React from "react";
import { Link} from "react-router-dom";
import { FaAlignRight} from 'react-icons/fa'

export default function Banner () {
    return (
        <header>
        <div className="content-wrapper">
            <figure>
                <img className= "logo" src="../images/precicleLogo.png" alt="precicle logo"/>
            </figure>
    
          <div className="menu-bar">
            <div className="hamburgerMenu">
                <FaAlignRight className="fas fa-bars"/>
            </div>
            <div className="exitMenu hide">
                <FaAlignRight className="fas fa-times"/>
            </div>
          </div>
          <nav>
            <ul className="nav-list hide">
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/nuestraHistoria">Nuestra Historia</Link>
                </li>
                <li>
                    <Link to="/retreats">Retreats</Link>
                </li>
                <li>
                    <Link to="/recursos">Recursos</Link>
                </li>
              
            </ul>
          </nav>
    </div>
  </header>
    
    )
}