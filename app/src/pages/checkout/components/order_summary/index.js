import React from "react";
import style from './index.module.sass'
import {useSelector} from "react-redux";

const OrderSummaryCheckoutComponent = () => {
    const {config, cart} = useSelector(state => state)
    const currency = config.data.payment.currency

    return (
        <div className={style.box}>
            <div className={style.boxTitle}>
                <h1 className="font font__subtitle font__subtitle--big">Your order summary</h1>
            </div>
            <div>
                <div className={style.boxParagraph}>
                    <p className="font__paragraph">Subtotal</p>
                    <p className="font__paragraph">{cart.data.total_products_price} {currency}</p>
                </div>

                <div className={style.boxParagraph}>
                    <p className="font__paragraph">Shipping</p>
                    {
                        cart.data.shipping > 0
                            ?
                            <p className="font__paragraph">{cart.data.shipping} {currency}</p>
                            :
                            <p className="font__paragraph">Free</p>
                    }

                </div>


                <div className={style.boxParagraph}>
                    <p className="font__paragraph"><strong>Total</strong></p>
                    <p className="font__paragraph"><strong>{cart.data.total_price} {currency}</strong></p>
                </div>

            </div>
        </div>
    )
}

export default OrderSummaryCheckoutComponent