import React from "react";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import {ShopPath} from "../../../home";

const BackToShopCartComponent = () => (
    <div className={style.box}>
        <Link to={ShopPath}>
            <p className={style.link}>continue shopping</p>
        </Link>
    </div>
)

export default BackToShopCartComponent