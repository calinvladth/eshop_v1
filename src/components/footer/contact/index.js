import React from "react";
import style from "./index.module.sass";
import SocialComponent from "../../social";
import {contactData} from "../../../data";

const ContactComponent = () => (
    <div className={style.box}>
        <div>
            <h2>Contact</h2>
        </div>
        <div>
            <span>{contactData.address}</span>
            <span>{contactData.phone}</span>
            <span>{contactData.email}</span>
        </div>
        <div>
            <SocialComponent/>
        </div>
    </div>
)

export default ContactComponent