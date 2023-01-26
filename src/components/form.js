import React from "react";

export default function Form () {
    return (

    <aside>
      <div class="content-wrapper">
        <div class="form-description">
          <h3>¿Estas interesada en participar en nuestro próximo Retreat?
          </h3>
          <p>Para recibir más información, escribe tu correo abajo.
          </p>
        </div>
        <div class="form">
          <input type="text" name="name" value="Correo electronico"/>
          <input type="button" value="Recibir guía"/>
        </div>
      </div>
    </aside>


    )

}