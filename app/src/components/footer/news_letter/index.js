import React, {useState} from "react";
import style from "./index.module.sass";
import axios from "axios";
import {api} from "../../../config";
import {newsletterData} from "../../../data";
import {useHistory} from "react-router";
import {NewsletterSuccessPath} from "../../../pages/newsletter_success";

const NewsLetterComponent = () => {
    const [email, setEmail] = useState('')
    const history = useHistory() 

    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: `${api}/newsletter/`,
            data: {email: email, shop: process.env.REACT_APP_SHOP_NAME}
        })
            .then(response => {
                history.push(NewsletterSuccessPath)
            })
            .catch(error => {
                history.push(NewsletterSuccessPath)
            })
        setEmail('')
    }

    return (
        <div className={style.box}>
            <div>
                <h2>Newsletter</h2>
            </div>
            <div>
                <p>{newsletterData.reason}</p>
            </div>

            <div>
                <form onSubmit={e => submit(e)}>
                    <input
                        required
                        type="email"
                        placeholder={'Email'}
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <button className="button">Subscribe</button>
                </form>
            </div>
        </div>
    )
}

export default NewsLetterComponent