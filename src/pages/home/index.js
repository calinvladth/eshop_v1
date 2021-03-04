import React, {createRef, useEffect} from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import ShopSectionComponent from "../../components/shop_section";
import {useLocation} from "react-router";
import AboutComponent from "./components/about";

export const HomePath = '/'
const shop = 'shop'
const ShopHash = `#${shop}`
export const ShopPath = `${HomePath}${ShopHash}`


const HomePage = () => {
    const location = useLocation()

    const shopRef = createRef()

    useEffect(() => {
        document.title = "Shop";
        if (location.hash === ShopHash) {
            window.scrollTo(0, shopRef.current.offsetTop)
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

            <section ref={shopRef}>
                <ShopSectionComponent shopRef={shopRef}/>
            </section>
        </div>
    )
}

export default HomePage