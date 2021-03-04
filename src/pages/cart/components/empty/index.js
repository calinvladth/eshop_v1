import React from "react";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import {ShopPath} from "../../../home";

const EmptyComponent = () => (
    <div className={style.box}>
        <p className="font__paragraph">Your cart is empty,</p>
        <Link to={ShopPath} className="font__paragraph">Go back shopping!</Link>
    </div>

)

export default EmptyComponent