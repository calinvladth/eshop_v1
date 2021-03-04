import React, {useState} from "react";
import style from './index.module.sass'
import {PostCartItem} from "../../../../../redux/cart/actions";
import {ChangeQuantity} from "../../../../../services/quantity";
import {useDispatch} from "react-redux";
import QuantityComponent from "../../../../../components/quantity";


const InfoComponent = ({product = {}, specs = []}) => {
    const dispatch = useDispatch()
    const [quantity, setQuantity] = useState(1)

    function editQuantity(add, quantity) {
        const newQuantity = ChangeQuantity(add, quantity)
        setQuantity(newQuantity)
    }

    return (
        <div className={style.box}>


            <div className={style.boxActions}>
                <QuantityComponent quantity={quantity} editQuantity={editQuantity}/>
                <button
                    onClick={() => dispatch(PostCartItem(product.data.id, quantity, false, true))}
                    className={['button', 'button--full-red', style.infoSubmit].join(' ')}>Add
                    to cart
                </button>
            </div>
            <div>
                <div className={style.specs}>
                    {
                        specs.map((o, i) => <p key={o.id}>{o.key} - {o.value}</p>)
                    }
                </div>
            </div>

        </div>
    )

}

export default InfoComponent