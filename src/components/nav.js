import React, { Component} from "react";
import { FaAlignJustify } from 'react-icons/fa';
import { Link} from "react-router-dom";
import Logo from "./logo";


export default class NavBar extends Component {
    state= {
      isOpen: false
    }
    handleToggle = () =>  {
      this.setState({isOpen: !this.state.isOpen})
  }

  render () {

    return (
       <header>
         <div className="content-wrapper">

            <Logo/>
                  <div className="menu-bar">
                    <button type="button "className="nav-btn" onClick= {this.handleToggle}>
                        <FaAlignJustify className="nav-icon"/>
                    </button>
    
                  </div>
                  <nav>
                    <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
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
       
     
            );
        }

    };
      
