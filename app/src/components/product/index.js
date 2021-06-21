import React from "react";
import {ProductPathBase} from "../../pages/product/path";
import style from "./index.module.sass";
import {api} from "../../config";
import {Link} from "react-router-dom";
import {OrderByIndex} from "../../services/reorder";
import {useSelector} from "react-redux";
import {setBackgroundImage} from "../../services/image";
import NoImageComponent from "../no_image";

const initialProduct = {
    id: 0,
    name: 'product name',
    images: [],
    price: 0,
    category: ''
}

const ProductComponent = ({product = initialProduct}) => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    return (
        <div className={style.box}>
            <Link to={`${ProductPathBase}/${product.id}/`} className={style.product}>


                {
                    product.images.length > 0
                        ?
                        <div className={style.image}
                             style={setBackgroundImage(api + OrderByIndex(product.images)[0].path)}>&nbsp;</div>
                        :
                        <div className={style.image}>
                            <NoImageComponent/>
                        </div>
                }

                <div className={style.box1}>
                    <div className={style.box1Title}>
                        <h1>{product.name}</h1>
                    </div>


                </div>
                <div className={style.box2}>
                    <div className={style.box2Category}>
                        <p>
                            {product.category.category.name || "Category"}
                        </p>
                    </div>
                    <div className={style.box1Price}>
                        <p>{product.price} {currency}</p>
                    </div>
                </div>
            </Link>
        </div>

    )
}

export default ProductComponent