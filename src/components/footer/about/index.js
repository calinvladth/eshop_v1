import React from "react";
import style from './index.module.sass'
import {ShippingAndRefundPath} from "../../../pages/legal/shipping_and_refund";
import {TermsAndConditionsPath} from "../../../pages/legal/terms_and_conditions";
import {PaymentMethodsPath} from "../../../pages/legal/payment_methods";
import {DataPrivacyPath} from "../../../pages/legal/data_privacy";

const AboutComponent = () => (
    <div className={style.box}>
        <div>
            <h2>About</h2>
        </div>
        <div>
            <a
                href={DataPrivacyPath}
                target="_blank"
                rel="noopener noreferrer"
            >Data privacy</a>
            <a
                href={ShippingAndRefundPath}
                target="_blank"
                rel="noopener noreferrer"
            >Shipping and refund</a>
            <a
                href={TermsAndConditionsPath}
                target="_blank"
                rel="noopener noreferrer"
            >Terms and conditions</a>
            <a
                href={PaymentMethodsPath}
                target="_blank"
                rel="noopener noreferrer"
            >Payment methods</a>
        </div>
    </div>
)

export default AboutComponent