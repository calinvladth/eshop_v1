import React, {useEffect, useState} from 'react'
import style from './index.module.sass'
import {useSelector} from "react-redux";
import {OrderByIndex} from "../../../../services/reorder";
import ActiveImageComponent from "./active_image";
import DetailsComponent from "./details";
import InfoComponent from "./info";

const ProductViewProductComponent = () => {
    const config = useSelector(state => state.config)
    const currency = config.data.payment.currency

    const [specs, setSpecs] = useState([])
    const [images, setImages] = useState([])
    const [primaryImage, setPrimaryImage] = useState({})

    const product = useSelector(state => state.product)

    useEffect(() => {
        setSpecs(OrderByIndex(product.data.specs))
        setImages(OrderByIndex(product.data.images))
        setPrimaryImage(product.data.images[0])
        return () => {
            setPrimaryImage({})
        }
    }, [product.success, product.data.name, product.data.images, product.data.specs])


    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <div>
                    <div className={style.boxTitle}>
                        <h1>{product.data.name}</h1>
                    </div>
                    <div className={`${style.bar} ${style.barRight}`}>&nbsp;</div>
                    <div className={style.boxSection}>
                        <DetailsComponent
                            product={product}
                            images={images}
                            primaryImage={primaryImage}
                            setPrimaryImage={setPrimaryImage}/>
                    </div>
                    <div className={style.mediumView}>
                        <div className={style.boxTitle}>
                            <h1>Price: {product.data.price} {currency}</h1>
                        </div>
                        <div className={`${style.bar} ${style.barLeft}`}>&nbsp;</div>
                        <div className={style.boxSection}>
                            <InfoComponent
                                specs={specs}
                                product={product}
                            />
                        </div>
                    </div>

                </div>
                <div>
                    <ActiveImageComponent images={images} primaryImage={primaryImage}/>
                </div>
                <div className={style.largeView}>
                    <div className={style.boxTitle}>
                        <h1>Price: {product.data.price} {currency}</h1>
                    </div>
                    <div className={`${style.bar} ${style.barLeft}`}>&nbsp;</div>
                    <div className={style.boxSection}>
                        <InfoComponent
                            specs={specs}
                            product={product}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductViewProductComponent