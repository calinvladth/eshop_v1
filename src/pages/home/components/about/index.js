import React from "react";
import style from './index.module.sass'
import SectionTitleComponent from "../../../../components/section_title";
import {homepageData} from "../../../../data";

const AboutComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div>
                <SectionTitleComponent title={homepageData.about_title}/>
            </div>

            <div className={style.boxParagraph}>
                <p>{homepageData.about_description}</p>
            </div>
        </div>
    </div>
)

export default AboutComponent