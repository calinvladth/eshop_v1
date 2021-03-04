import React from "react";
import style from "./index.module.sass";
import TableCartComponent from "../table";
import BackToShopCartComponent from "../back_to_shop";
import CheckoutCartComponent from "../checkout";

const CartSectionComponent = ({data}) => {
    return (
        <div className={style.cart}>

            <div className={style.cartContent}>
                <div>
                    <div className={style.table}>
                        <TableCartComponent products={data.data.products}/>
                    </div>
                    <div>
                        <BackToShopCartComponent/>
                    </div>
                </div>
                <div>
                    <div>
                        <CheckoutCartComponent total_price={data.data.total_price}/>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CartSectionComponent