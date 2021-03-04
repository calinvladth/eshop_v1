import React, {useState} from "react";
import style from "./index.module.sass";
import axios from "axios";
import {api} from "../../../config";
import {useDispatch} from "react-redux";
import {SetAlert} from "../../../redux/alerts/actions";

const NewsLetterComponent = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    const submit = (e) => {
        e.preventDefault()
        axios({
            method: 'POST',
            url: `${api}/newsletter/`,
            data: {email: email, shop: process.env.REACT_APP_SHOP_NAME}
        })
            .then(response => {
                dispatch(SetAlert(response.data))

            })
            .catch(error => {
                dispatch(SetAlert({success: false, message: 'You are already subscribed'}))
            })
        setEmail('')
    }

    return (
        <div className={style.box}>
            <div>
                <h2>Newsletter</h2>
            </div>
            <div>
                <p>Sign up for exciting sales and updates about our new products.</p>
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