import React, {useEffect, useState} from "react";
import style from "./index.module.sass";
import ProductComponent from "../../components/product";
import Pagination from "../../components/pagination";
import {useDispatch, useSelector} from "react-redux";
import {GetProducts} from "../../redux/products/actions";
import ShopFiltersComponent from "./shop_filters";
import SectionTitleComponent from "../section_title";
import {homepageData} from "../../data";
import LoadingComponent from "../loading";
import {useHistory} from "react-router-dom";
import {HomePath, ShopHash} from "../../pages/home";
import {addQuery, useQuery} from "../../services/url";

const ShopSectionComponent = ({shopRef}) => {
    const [showFilters, setShowFilters] = useState(false)
    const {products} = useSelector(state => state)
    const dispatch = useDispatch()

    // Query
    const history = useHistory()
    const query = useQuery()
    const page = query.get('page') || 1
    let filters_data = {}
    filters_data['page'] = query.get('page') || 1
    if (query.get('sort_by')) filters_data['sort_by'] = query.get('sort_by')
    if (query.get('category')) filters_data['category'] = query.get('category')

    useEffect(() => {
        dispatch(GetProducts(page, filters_data))
        // eslint-disable-next-line
    }, [
        dispatch,
        filters_data.sort_by,
        filters_data.page,
        filters_data.category
    ])

    function pagination(page = 1) {
        // If no page query, set to 1
        filters_data['page'] = page
        history.push(HomePath + `?${addQuery(filters_data)}` + ShopHash)
    }

    function filters() {
        setShowFilters(true)
    }

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <div>
                    <SectionTitleComponent title={homepageData.shop_title}/>
                </div>
                {
                    products.success && products.loaded
                        ?
                        <Pagination
                            data={products.pagination}
                            filters={{show: true, action: filters, name: 'Products'}}
                            action={pagination}
                        >
                            {
                                showFilters && <ShopFiltersComponent setShowFilters={setShowFilters}/>
                            }
                            <div className={style.boxProducts} ref={shopRef}>
                                {
                                    products.data.length > 0
                                        ?
                                        products.data.map(o => <ProductComponent key={o.id} product={o}/>)
                                        :
                                        <p>No products</p>
                                }
                            </div>
                        </Pagination>
                        :
                        <LoadingComponent/>
                }

            </div>
        </div>
    )
}

export default ShopSectionComponent