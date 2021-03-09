import React, {useEffect} from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import {Link} from "react-router-dom";
import NotFoundSvg from "../../assets/icons/not_found";
import {HomePath} from "../home";
import {errorData} from "../../data";


const NotFoundPage = () => {
    useEffect(() => {
        document.title = '404 | Page not found'
    }, [])
    return (
        <ConfirmationComponent icon={<NotFoundSvg/>}>
            <div className={style.box}>
                <h1 className="font font__subtitle font__subtitle--big">{errorData.not_found.title}</h1>
                <p className="font__paragraph"><Link to={HomePath}>Go back</Link></p>
            </div>
        </ConfirmationComponent>
    )
}

export default NotFoundPage