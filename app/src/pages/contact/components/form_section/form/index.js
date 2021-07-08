import React, {useState} from "react";
import style from './index.module.sass'
import {useHistory} from "react-router";
import {MessageSuccessPath} from "../../../../message_success/path";
import axios from "axios";
import {api} from "../../../../../config";
import {SetAlert} from "../../../../../redux/alerts/actions";
import {useDispatch} from "react-redux";
import {ValidateEmail, ValidateText} from "../../../../../services/validators";


const FormComponent = () => {
    const [name, setName] = useState('')
    const [nameError, setNameError] = useState({
        show: false,
        message: 'The name is required'
    })
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState({
        show: false,
        message: 'A valid email address is required'
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
        } else if (email && email.length > 0) {
            pass = ValidateEmail(email)
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
                    <label className="label">
                        Your name
                    </label>
                    <input
                        type="text"
                        className={`input ${nameError.show && !ValidateText(name) && "error"} ${ValidateText(name) && "success"}`}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {
                        nameError.show && !ValidateText(name) && <span className="labelError">{nameError.message}</span>
                    }
                </div>

                <div>
                    <label className="label">
                        Your email
                    </label>
                    <input
                        type="text"
                        className={`input ${emailError.show && !ValidateEmail(email) && "error"} ${ValidateEmail(email) && "success"}`}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        emailError.show && !ValidateEmail(email) &&
                        <span className="labelError">{emailError.message}</span>
                    }
                </div>


            </div>
            <div>
                <label className="label">
                    Subject
                </label>
                <input
                    type="text"
                    className={`input ${subjectError.show && !ValidateText(subject) && "error"} ${ValidateText(subject) && "success"}`}
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                />
                {
                    subjectError.show && !ValidateText(subject) && <span className="labelError">{subjectError.message}</span>
                }

            </div>
            <div>
                <label className="label">
                    Message
                </label>
                <textarea
                    className={`textarea ${messageError.show && !ValidateText(message) && "error"} ${ValidateText(message) && "success"}`}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                {
                    messageError.show && !ValidateText(message) && <span className="labelError">{messageError.message}</span>
                }
            </div>
            <div>
                <button type="submit" className="button button--full-red">Submit</button>
            </div>
        </form>
    );
}

export default FormComponent