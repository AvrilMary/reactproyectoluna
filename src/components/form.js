import React from "react";
import { useTranslation } from "react-i18next";


const Form = () => {
    
    const { t, i18n} = useTranslation();

    return (

    <div className="aside">
      <div className="content-wrapper">
          <div className="form-description">
            <h3>  {t("formTitle.label")} </h3>
            <p>{t("formDescription.label")}</p>
          </div>
        <div className="form">
          <input type="text" name="name" value="Correo electronico"/>
          <input type="button" value={t("formButton.label")}/>
        </div>
      </div>

    </div>
      
    )

}

export default Form;