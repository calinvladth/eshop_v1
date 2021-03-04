import React, {useState} from "react";
import style from './index.module.sass'
import {useHistory} from "react-router";
import {MessageSuccessPath} from "../../../../message_success/path";
import axios from "axios";
import {api} from "../../../../../config";
import {SetAlert} from "../../../../../redux/alerts/actions";
import {useDispatch} from "react-redux";


const FormComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [message, setMessage] = useState('')

    const dispatch = useDispatch()

    const history = useHistory()

    function submit(e) {
        e.preventDefault()
        const data = {
            name, email, subject, message
        }
        axios({
            method: 'POST',
            url: `${api}/user_message/`,
            data: {...data, shop: process.env.REACT_APP_SHOP_NAME}
        })
            .then(() => {
                history.push(MessageSuccessPath)
                setName('')
                setEmail('')
                setSubject('')
                setMessage('')
            })
            .catch(error => dispatch(SetAlert(error.response.data)))
    }

    return (
        <form className={style.form} onSubmit={(e) => submit(e)}>
            <div className={style.formGroup}>
                <input
                    type="text"
                    placeholder="Your name"
                    className="input"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required/>
                <input
                    type="email"
                    placeholder="Your email"
                    className="input"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required/>
            </div>
            <div>
                <input
                    type="text"
                    placeholder="Subject"
                    className="input"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    required/>
            </div>
            <div>
                <textarea
                    placeholder="Message here ..."
                    className="textarea"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required/>
            </div>
            <div>
                <button type="submit" className="button button--full-red">Submit</button>
            </div>
        </form>
    );
}

export default FormComponent