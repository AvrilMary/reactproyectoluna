import React from "react";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


export default function Hero() {
    return (
        <div className="heroBackground">
            <ImageSlider slides={SliderData}/>;
        </div>
    )
  }