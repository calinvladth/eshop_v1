import React, {createRef, useEffect} from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import ShopSectionComponent from "../../components/shop_section";
import {useLocation} from "react-router";
import AboutComponent from "./components/about";

export const HomePath = '/'
const shop = 'shop'
export const ShopHash = `#${shop}`
export const ShopPath = `${HomePath}${ShopHash}`


const HomePage = () => {
    const location = useLocation()

    const shopRef = createRef()

    document.title = "Shop";
    useEffect(() => {
        if (location.hash === ShopHash) {
            if (shopRef && shopRef.current) shopRef.current.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
    }, [shopRef, location])


    return (
        <div className={style.box}>
            <section>
                <HeroComponent/>
            </section>
            <section>
                <AboutComponent/>
            </section>
            <section>
                <ShopSectionComponent shopRef={shopRef}/>
            </section>
        </div>
    )
}

export default HomePage