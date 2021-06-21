import React from "react";
import style from './index.module.sass'
import NewsLetterComponent from "./news_letter";
import AboutComponent from "./about";
import ContactComponent from "./contact";


const FooterComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div>
                <NewsLetterComponent/>
            </div>
            <div>
                <AboutComponent/>
            </div>
            <div>
                <ContactComponent/>
            </div>

        </div>
    </div>
)

export default FooterComponent