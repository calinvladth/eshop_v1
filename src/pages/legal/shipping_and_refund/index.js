import React, {useEffect} from "react";
import style from "../index.module.sass";

export const ShippingAndRefundPath = '/shipping_and_refund'

const ShippingAndRefundPage = () => {
    useEffect(() => {
        document.title = 'Shipping and refund'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <h1>Shipping and refund</h1>
            </div>
        </div>
    )
}

export default ShippingAndRefundPage