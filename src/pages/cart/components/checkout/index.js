import React from "react";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import {CheckoutPath} from "../../../checkout/path";
import {useSelector} from "react-redux";

const CheckoutCartComponent = () => {
    const {config, cart} = useSelector(state => state)
    const {currency} = config.data.payment

    return (
        <div className={style.box}>
            <div className={style.button}>
                <Link to={CheckoutPath}>
                    <button className="button button--full-red button--long">Checkout</button>
                </Link>

            </div>

            <div className={style.title}>
                <h1 className="font font__subtitle font__subtitle--big">Your order summary</h1>
            </div>

            <div>
                <div className={style.paragraph}>
                    <p className="font__paragraph">Subtotal</p>
                    <p className="font__paragraph">{cart.data.total_products_price} {currency}</p>
                </div>

                <div className={style.paragraph}>
                    <p className="font__paragraph">Shipping</p>
                    {
                        cart.data.shipping > 0
                        ?
                            <p className="font__paragraph">{cart.data.shipping} {currency}</p>
                            :
                            <p className="font__paragraph">Free</p>
                    }

                </div>

                <div className={style.paragraph}>
                    <p className="font__paragraph"><strong>Total</strong></p>
                    <p className="font__paragraph"><strong>{cart.data.total_price} {currency}</strong></p>
                </div>

            </div>

        </div>
    )
}

export default CheckoutCartComponent