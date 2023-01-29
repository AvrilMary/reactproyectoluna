import React from "react";
import ImageSlider from './ImageSlider';
import { SliderData } from './SliderData';


export default function Hero() {
    return (
      <section className="heroBackground">
        <div>
            <ImageSlider slides={SliderData}/>;
        </div>
      </section>
    )
  }