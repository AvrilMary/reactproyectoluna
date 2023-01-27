import React from "react";
import { FaLinkedin } from 'react-icons/fa';
import { FaFacebookF} from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

export default function Footer () {
    return (
    <footer>

        <div class="content-wrapper">
          <div class="footer-content">
            <div class="contact">
              <h4>Contacto</h4>
              <address>
                <p>
                  2281-71-75-01<br/>
                  turvey.am@gmail.com
                </p>
              </address>
            </div>
            <div class="social">
              <h4>Social</h4>
              <div class="social-icons">
                <p>
                  <a href="https://www.facebook.com/Skillcrush/">
                    <FaFacebookF className="icons"/>
                  </a>
                </p>
                <p>
                  <a href="https://twitter.com/Skillcrush">
                    <FaLinkedin className="icons"/>
                  </a>
                </p>
                <p>
                  <a href="https://www.instagram.com/skillcrush/">
                    <FaInstagram className="icons"/>
                  </a>
                </p>
              </div>
             
            </div>
        
          </div>

        </div>

    </footer>
        
    )
};
