import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import {contactData, contactpageData} from "../../../../data";

const HeroComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div>
                <div className={style.boxDescription}>
                    <div className={style.boxDescriptionContent}>
                        <div>
                            <h1>{contactpageData.title}</h1>
                        </div>
                        <div>
                            <p>{contactpageData.subtitle}</p>
                        </div>
                        <div>
                            <span>{contactData.address}</span>
                            <span>{contactData.phone}</span>
                            <span>{contactData.email}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.boxImage} style={setBackgroundImage(contactpageData.image)}>&nbsp;</div>
        </div>
    </div>
)

export default HeroComponent