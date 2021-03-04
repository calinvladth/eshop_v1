import React from "react";
import style from "./index.module.sass";
import SocialComponent from "../../social";

const ContactComponent = () => (
    <div className={style.box}>
        <div>
            <h2>Contact</h2>
        </div>
        <div>
            <span>232 Bubby Drive. Austin Texas</span>
            <span>512-563-3420</span>
            <span>example@email.com</span>
        </div>
        <div>
            <SocialComponent/>
        </div>
    </div>
)

export default ContactComponent