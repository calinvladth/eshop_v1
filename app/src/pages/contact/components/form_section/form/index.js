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
    const [nameError, setNameError] = useState({
        show: false,
        message: 'The name is required'
    })
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState({
        show: false,
        message: 'The email is required'
    })
    const [subject, setSubject] = useState('')
    const [subjectError, setSubjectError] = useState({
        show: false,
        message: 'The subject is required'
    })
    const [message, setMessage] = useState('')
    const [messageError, setMessageError] = useState({
        show: false,
        message: 'The message is required'
    })

    const dispatch = useDispatch()

    const history = useHistory()

    function submit(e) {
        e.preventDefault()
        let pass = true

        if (!name && name.length === 0) {
            pass = false
            setNameError({...nameError, show: true})
        }

        if (!email && email.length === 0) {
            pass = false
            setEmailError({...emailError, show: true})
        }

        if (!subject && subject.length === 0) {
            pass = false
            setSubjectError({...subjectError, show: true})
        }

        if (!message && message.length === 0) {
            pass = false
            setMessageError({...messageError, show: true})
        }

        if (pass) {
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
        } else {
            document.getElementById('contactForm').scrollIntoView()
        }


    }

    return (
        <form id="contactForm" className={style.form} onSubmit={(e) => submit(e)}>
            <div className={style.formGroup}>
                <div>
                    <input
                        type="text"
                        placeholder="Your name"
                        className={`input ${nameError.show && name.length === 0 && "error"} ${nameError.show && name.length > 0 && "success"}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {
                        nameError.show && name.length === 0 && <span>{nameError.message}</span>
                    }
                </div>

                <div>
                    <input
                        type="email"
                        placeholder="Your email"
                        className={`input ${emailError.show && email.length === 0 && "error"} ${emailError.show && email.length > 0 && "success"}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        emailError.show && email.length === 0 && <span>{emailError.message}</span>
                    }
                </div>


            </div>
            <div>
                <input
                    type="text"
                    placeholder="Subject"
                    className={`input ${subjectError.show && subject.length === 0 && "error"} ${subjectError.show && subject.length > 0 && "success"}`}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                {
                    subjectError.show && subject.length === 0 && <span>{subjectError.message}</span>
                }

            </div>
            <div>
                <textarea
                    placeholder="Message here ..."
                    className={`textarea ${messageError.show && message.length === 0 && "error"} ${messageError.show && message.length > 0 && "success"}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {
                    messageError.show && message.length === 0 && <span>{messageError.message}</span>
                }
            </div>
            <div>
                <button type="submit" className="button button--full-red">Submit</button>
            </div>
        </form>
    );
}

export default FormComponent