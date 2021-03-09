import React, {useEffect} from "react";
import style from "../index.module.sass";
import {legalPagesData} from "../../../data";

export const ShippingAndRefundPath = '/shipping_and_refund'

const ShippingAndRefundPage = () => {
    useEffect(() => {
        document.title = 'Shipping and refund'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                {legalPagesData.shipping_and_refund}
            </div>
        </div>
    )
}

export default ShippingAndRefundPage