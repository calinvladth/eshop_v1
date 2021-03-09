import React, {useEffect} from "react";
import style from './layout.module.sass'
import CartSectionComponent from "./components/cart_section";
import EmptyComponent from "./components/empty";
import {useSelector} from "react-redux";
import ScrollIntoView from "../../components/scroll_into_view";

const CartPage = () => {
    const cart = useSelector(state => state.cart)

    useEffect(() => {
        document.title = 'Cart'
    }, [])


    return (
        <ScrollIntoView>
            <div className={style.box}>
                <div className={style.boxContent}>
                    <section>
                        <div className={style.cartTitle}>
                            <h1 className="font font__title">Cart</h1>
                        </div>
                    </section>

                    <section>
                        {
                            cart.success && cart.data.products.length > 0 && <CartSectionComponent data={cart}/>
                        }
                        {
                            cart.success && cart.data.products.length < 1 && <EmptyComponent/>
                        }
                    </section>
                </div>
            </div>
        </ScrollIntoView>
    );
}

export default CartPage