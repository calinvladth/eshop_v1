import React from "react";
import style from './index.module.sass'
import {CartPath} from "../../../cart/path";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {api} from "../../../../config";
import {setBackgroundImage} from "../../../../services/image";

const CartCheckoutComponent = () => {
    const cart = useSelector(state => state.cart)
    return (
        <div className={style.box}>

            <div className={style.header}>
                <div className={style.headerTitle}>
                    <h1 className="font font__subtitle font__subtitle--big">Cart</h1>
                </div>
                <div className={style.headerDetails}>
                    <p className="font__paragraph">{cart.data.total_quantity} item in your cart</p>
                    <Link to={CartPath} className="font__paragraph">Edit</Link>
                </div>
            </div>

            <div className={style.table}>
                {
                    cart.data.products.map(o => <Row o={o} key={o.id}/>)
                }
            </div>

        </div>
    )
}

const Row = ({o}) => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency
    return <div className={style.tableRow}>
        <div>
            <div className={style.product} style={setBackgroundImage(
                o.images.length > 0
                ? api + o.images[0].path
                    : null
            )}>

            </div>
            <div className={style.details}>
                <div className={style.detailsName}>
                    <p className="font__paragraph">{o.name}</p>
                </div>
                {/*<div className={style.detailsName}>*/}
                {/*    {*/}
                {/*        o.specs.map(s => <p key={s.key} className="font__paragraph">{s.key}: {s.value}</p>)*/}
                {/*    }*/}
                {/*</div>*/}
            </div>
        </div>
        <div>
            <div className={style.price}>
                <p>{o.total_price} {currency}</p>
            </div>
        </div>
    </div>
}

export default CartCheckoutComponent