import React from "react";
import { FaChevronCircleLeft } from 'react-icons/fa';
import { FaChevronCircleRight } from 'react-icons/fa';
import image from "./background-cover-image.jpg";

export default function Hero() {
    return (
      <section >
            <div className="heroBackground">
                <div class="arrows" id="left-arrow">
                    <FaChevronCircleLeft/>
                </div>
            <figure>
                <img className="retreatImage" src={image} alt=""/>
            </figure>
            <div class="arrows" id="right-arrow">
                <FaChevronCircleRight/>
            </div>
        </div>
      </section>
    )
  }