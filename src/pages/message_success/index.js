import React, {useEffect} from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import MessageSvg from "../../assets/icons/message";
import {successData} from "../../data";


const MessageSuccessPage = () => {
    useEffect(() => {
        document.title = 'Message Sent'
    }, [])
    return (
        <ConfirmationComponent icon={<MessageSvg/>}>
            <div className={style.box}>
                <h1 className="font font__subtitle font__subtitle--big">{successData.message.title}</h1>
                <p className="font__paragraph">{successData.message.message}</p>
            </div>
        </ConfirmationComponent>
    )
}

export default MessageSuccessPage