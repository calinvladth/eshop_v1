import React from "react";
import style from "./index.module.sass";

const SectionTitleComponent = ({title = 'No title'}) => (
    <div className={style.boxTitle}>
        <span className={style.boxTitleBar}>&nbsp;</span>
        <span className={style.boxTitleBackground}>
            <h1>{title}</h1>
        </span>
    </div>
)

export default SectionTitleComponent