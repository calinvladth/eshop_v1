import React, {useEffect} from 'react'
import style from './index.module.sass'
import ProductComponent from "../../../../components/product";
import {useDispatch, useSelector} from "react-redux";
import {ClearRelatedProductsState, GetRelatedProducts} from "../../../../redux/related_products/actions";
import {useParams} from "react-router";


const RelatedProductsComponent = () => {
    const {related_products, product} = useSelector(state => state)
    const {id} = useParams()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetRelatedProducts({
            category: product.data.category.category.id,
            product: id
        }))
        return function cleanup() {
            dispatch(ClearRelatedProductsState())
        }
    }, [dispatch, id, product.data.category.category.id])
    return (
        <div className={style.box}>
            {
                related_products.data.length > 0
                    ?
                    related_products.data.map((o, i) => {
                        return i < 3 ? <div key={o.id}>
                            <ProductComponent product={o}/>
                        </div> : null
                    })
                    :
                    <div>
                        <p className="font__paragraph">No related products</p>
                    </div>
            }
        </div>
    )
}


export default RelatedProductsComponent