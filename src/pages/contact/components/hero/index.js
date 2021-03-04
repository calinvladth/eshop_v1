import React from "react";
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";

import ContactImage from '../../../../assets/images/contact.jpg'

const HeroComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>
            <div>
                <div className={style.boxDescription}>
                    <div className={style.boxDescriptionContent}>
                        <div>
                            <h1>Contact us</h1>
                        </div>
                        <div>
                            <p>Fell free to contact us and we will get back to you as soon as possible.</p>
                        </div>
                        <div>
                            <span>232 Bubby Drive. Austin Texas</span>
                            <span>512-563-3420</span>
                            <span>example@email.com</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className={style.boxImage} style={setBackgroundImage(ContactImage)}>&nbsp;</div>
        </div>
    </div>
)

export default HeroComponent