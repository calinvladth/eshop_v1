import React, {useEffect} from 'react'
import style from './layout.module.sass'
import ProductViewProductComponent from "./components/product_view";
import RelatedProductsComponent from "./components/related_products";
import {useDispatch, useSelector} from "react-redux";
import {ClearProductState, GetProductByPk} from "../../redux/product";
import {useParams} from "react-router-dom";
import DescriptionFullComponent from "./components/description_full";
import SectionTitleComponent from "../../components/section_title";
import LoadingComponent from "../../components/loading";
import NotFoundComponent from "../../components/not_found";

const ProductPage = () => {
    const dispatch = useDispatch()
    const {product} = useSelector(state => state)
    const {id} = useParams()


    useEffect(() => {

        window.scrollTo(0, 0)
        dispatch(GetProductByPk(id))

        return function cleanup() {
            dispatch(ClearProductState())
        }

    }, [id, dispatch])

    useEffect(() => {
        if (product.success && product.loaded) document.title = product.data.name
    }, [product.success, product.loaded, product.data.name])


    if (product.success && product.loaded) {
        return (
            <div className={style.box}>
                <div className={style.boxContent}>

                    <section>
                        <ProductViewProductComponent/>
                    </section>

                    <section>
                        <DescriptionFullComponent description={product.data.description_long}/>
                    </section>


                    <section>
                        <SectionTitleComponent title={'Related Products'}/>
                        <div className={style.relatedProducts}>
                            <RelatedProductsComponent/>
                        </div>
                    </section>

                </div>
            </div>
        )
    } else {
        return (
            <div className={style.box}>
                <div className={style.boxContent}>
                    {
                        !product.loaded
                            ?
                            <LoadingComponent/>
                            :
                            <NotFoundComponent/>
                    }

                </div>
            </div>
        )
    }
}

export default ProductPage