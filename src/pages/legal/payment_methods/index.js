import React, {useEffect} from "react";
import style from '../index.module.sass'

export const PaymentMethodsPath = '/payment_methods'

const PaymentMethodsPage = () => {
    useEffect(() => {
        document.title = 'Payment methods'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <h1>Payment methods / Accepted payment types</h1>
            </div>
        </div>
    )
}

export default PaymentMethodsPage