import React from "react";
import style from './index.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {PostCartItem, RemoveCartItem} from "../../../../redux/cart/actions";
import {api} from "../../../../config";
import {OrderByIndex} from "../../../../services/reorder";
import QuantityComponent from "../../../../components/quantity";
import {setBackgroundImage} from "../../../../services/image";


const TableRowCartComponent = ({product}) => {
    const dispatch = useDispatch()
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    function editQuantity(add) {
        let new_product = {product: product.id, quantity: add ? product.quantity + 1 : product.quantity - 1}
        if (new_product.quantity > 0) dispatch(PostCartItem(new_product.product, new_product.quantity, true))
    }

    return (
        <tr>
            <td className={style.product}>
                <div
                    className={style.productImage}
                    style={setBackgroundImage(
                        product.images.length > 0
                            ? api + OrderByIndex(product.images)[0].path
                            : null
                    )}>
                </div>
                <div className={style.productDetails}>
                    <div className={style.productParagraph}>
                        <p className="font__paragraph">{product.name}</p>
                    </div>
                    {/*<div className={style.productParagraph}>*/}
                    {/*    <p className="paragraph">{product.category.category.name}</p>*/}
                    {/*</div>*/}
                    <div className={style.productRemove}>
                        <p className="font__paragraph" onClick={() => dispatch(RemoveCartItem(product.id))}>remove</p>
                    </div>
                </div>
            </td>
            <td className={style.price}>
                <p className="font__paragraph">{product.price} {currency}</p>
            </td>
            <td className="tableCartComponent__quantitybox">
                <QuantityComponent quantity={product.quantity} editQuantity={editQuantity}/>
            </td>
            <td className={style.total}>
                <p className="font__paragraph">{product.total_price} {currency}</p>
            </td>
        </tr>
    );
}


export default TableRowCartComponent