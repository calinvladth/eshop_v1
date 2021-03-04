import React, {useState} from "react";
import style from './index.module.sass'
import CareerJPG from "../../assets/images/career.jpg";
import {setBackgroundImage} from "../../services/image";
import {useDispatch} from "react-redux";
import {SetAlert} from "../../redux/alerts/actions";

const NewsLetterComponent = () => {
    const [email, setEmail] = useState('')
    const dispatch = useDispatch()

    function submit(e) {
        e.preventDefault()
        setEmail('')
        dispatch(SetAlert({
            success: true,
            message: 'Thank you for subscribing to the newsletter'
        }))
    }

    return (
        <form className={style.box} style={setBackgroundImage(CareerJPG)} onSubmit={(e) => submit(e)}>
            <div className={style.content}>
                <div className={style.contentTitle}>
                    <h3 className="font font__subtitle font__subtitle--big">Subscribe to our newsletter</h3>
                </div>
                <div className={style.contentSubtitle}>
                    <p className="font__paragraph">Stay notified about our latest products</p>
                </div>
                <div className={style.contentAction}>
                    <input
                        type="email"
                        required
                        value={email}
                        placeholder="your@email.com"
                        className="input"
                        onChange={(e) => setEmail(e.target.value)}/>
                    <div className={style.contentButton}>
                        <button type="submit" className="button button--full">Subscribe</button>
                    </div>
                </div>

            </div>
        </form>
    )
}

export default NewsLetterComponent