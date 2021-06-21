import React, {useEffect} from "react";
import ConfirmationComponent from "../../components/confirmation";
import style from './index.module.sass'
import {successData} from "../../data";
import NewsletterSvg from "../../assets/icons/newsletter";

export const NewsletterSuccessPath = '/newsletter'

const NewsletterSuccessPage = () => {
    useEffect(() => {
        document.title = 'Email Sent'
    }, [])
    return (
        <ConfirmationComponent icon={<NewsletterSvg/>}>
            <div className={style.box}>
                <h1 className="font font__subtitle font__subtitle--big">{successData.newsletter.title}</h1>
                <p className="font__paragraph">{successData.newsletter.message}</p>
            </div>
        </ConfirmationComponent>
    )
}

export default NewsletterSuccessPage