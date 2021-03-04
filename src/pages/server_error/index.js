import React, {useEffect} from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import ServerSvg from "../../assets/icons/server";

const ServerErrorPage = () => {
    useEffect(() => {
        document.title = 'Server Error'
    }, [])
    return (
        <ConfirmationComponent icon={<ServerSvg/>}>
            <div className={style.box}>
                <p className="font font__subtitle font__subtitle--big">Thank you for your patience</p>
                <p className="font__paragraph">Our servers are down. Please come back later</p>
            </div>
        </ConfirmationComponent>
    )
}

export default ServerErrorPage