import React, {useEffect} from "react";
import style from '../index.module.sass'
import {legalPagesData} from "../../../data";

export const PaymentMethodsPath = '/payment_methods'

const PaymentMethodsPage = () => {
    useEffect(() => {
        document.title = 'Payment methods'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                {legalPagesData.payment_method}
            </div>
        </div>
    )
}

export default PaymentMethodsPage