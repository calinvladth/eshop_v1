import React, {useEffect} from "react";
import style from './index.module.sass'
import ConfirmationComponent from "../../components/confirmation";
import OrderSvg from "../../assets/icons/order";
import {useHistory, useLocation} from "react-router";
import {ShopPath} from "../home";
import {successData} from "../../data";

const OrderSuccessPage = () => {
    const history = useHistory()
    const location = useLocation()

    if (!location.state) history.push(ShopPath)

    useEffect(() => {
        document.title = 'Order Sent'
    }, [])

    return (
        <ConfirmationComponent icon={<OrderSvg/>}>
            <div className={style.box}>
                <p className="font font__subtitle font__subtitle--big">{successData.order.title}</p>
                <p className="font__paragraph">Your order id is: {location.state}</p>
            </div>
        </ConfirmationComponent>
    )
}

export default OrderSuccessPage