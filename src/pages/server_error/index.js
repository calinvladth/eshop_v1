import React, {useEffect} from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import ServerSvg from "../../assets/icons/server";
import {errorData} from "../../data";

const ServerErrorPage = () => {
    useEffect(() => {
        document.title = 'Server Error'
    }, [])
    return (
        <ConfirmationComponent icon={<ServerSvg/>}>
            <div className={style.box}>
                <p className="font font__subtitle font__subtitle--big">{errorData.server_down.title}</p>
                <p className="font__paragraph">{errorData.server_down.message}</p>
            </div>
        </ConfirmationComponent>
    )
}

export default ServerErrorPage