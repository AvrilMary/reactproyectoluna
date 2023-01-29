import React from "react";
import { withTranslation } from "react-i18next";


const Form =  ({t}) => {

    return (

    <aside>
      <div class="content-wrapper">
        <div class="form-description">
          <h3>  {t("formTitle.label")}
          </h3>
          <p>{t("formDescription.label")}
          </p>
        </div>
        <div class="form">
          <input type="text" name="name" value="Correo electronico"/>
          <input type="button" value={t("formButton.label")}/>
        </div>
      </div>
    </aside>
    )

}

export default withTranslation()(Form);