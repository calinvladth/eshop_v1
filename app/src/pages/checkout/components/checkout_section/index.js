import React from "react";
import style from './index.module.sass'
import FormCheckoutComponent from "../form";
import CartCheckoutComponent from "../cart";
import OrderSummaryCheckoutComponent from "../order_summary";

const CheckoutSectionComponent = ({setBillingAddress}) => {

    return (

        <div className={style.checkoutContent}>

            <div>
                <div className={style.form}>
                    <div className={style.formTitle}>
                        <h1>Billing Details</h1>
                    </div>
                    <div className={style.formContent}>
                        <FormCheckoutComponent setBillingAddress={setBillingAddress}/>
                    </div>
                </div>
            </div>

            <div>
                <div className={style.preview}>
                    <div className={style.cart}>
                        <CartCheckoutComponent/>
                    </div>
                    <div className={style.orderSummary}>
                        <OrderSummaryCheckoutComponent/>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default CheckoutSectionComponent