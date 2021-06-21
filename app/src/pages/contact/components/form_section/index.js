import React from "react";
import style from "./index.module.sass";
import FormComponent from "./form";

const FormSectionComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div className={style.boxBox}>
                <FormComponent/>
            </div>
        </div>
    </div>
)

export default FormSectionComponent