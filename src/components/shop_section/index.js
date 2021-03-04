import React, {useEffect, useState} from "react";
import style from "./index.module.sass";
import ProductComponent from "../../components/product";
import Pagination from "../../components/pagination";
import {useDispatch, useSelector} from "react-redux";
import {GetProducts} from "../../redux/products/actions";
import ShopFiltersComponent from "./shop_filters";
import SectionTitleComponent from "../section_title";

const ShopSectionComponent = ({shopRef}) => {
    const [showFilters, setShowFilters] = useState(false)
    const {products} = useSelector(state => state)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(GetProducts(1, filters))
    }, [dispatch])

    function pagination(page = 1) {
        window.scrollTo(0, shopRef.current.offsetTop)
        dispatch(GetProducts(page, filters))
    }

    function filters() {
        setShowFilters(true)
    }

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <div>
                    <SectionTitleComponent title={'Shop'}/>
                </div>
                <Pagination
                    data={products.pagination}
                    filters={{show: true, action: filters, name: 'Products'}}
                    action={pagination}
                >
                    {
                        showFilters && <ShopFiltersComponent setShowFilters={setShowFilters}/>
                    }
                    <div className={style.boxProducts}>
                        {
                            products.data.length > 0
                                ?
                            products.data.map(o => <ProductComponent key={o.id} product={o}/>)
                                :
                                <p>No products</p>
                        }
                    </div>
                </Pagination>
            </div>
        </div>
    )

}

export default ShopSectionComponent