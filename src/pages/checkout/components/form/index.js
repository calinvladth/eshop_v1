import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {SetAlert} from "../../../../redux/alerts/actions";
import {useDispatch} from "react-redux";

const FormCheckoutComponent = ({setBillingAddress}) => {
    const dispatch = useDispatch()
    const [readOnly, setReadOnly] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [address, setAddress] = useState('')
    const [zip, setZip] = useState('')

    useEffect(() => {
        const obj = localStorage.getItem('billingAddress') || "{}"
        if (obj !== JSON.stringify({})) {
            const obj_json = JSON.parse(obj)
            setFirstName(obj_json.firstName)
            setLastName(obj_json.lastName)
            setEmail(obj_json.email)
            setPhone(obj_json.phone)
            setCity(obj_json.city)
            setAddress(obj_json.address)
            setZip(obj_json.zip)
            setReadOnly(true)
            setBillingAddress(true)
        }
        // eslint-disable-next-line
    }, [dispatch])

    const submit = (e) => {
        e.preventDefault()
        const data = {
            firstName, lastName, email, phone, city, address, zip
        }


        if (readOnly) {
            setBillingAddress(false)
        }

        if (!readOnly) {
            localStorage.setItem('billingAddress', JSON.stringify(data))
            dispatch(SetAlert({
                success: true,
                message: `Billing address was saved`
            }))
            setBillingAddress(true)
        }
        setReadOnly(!readOnly)
    }

    return (
        <div className={style.box}>
            <form className={style.form} onSubmit={e => submit(e)}>
                <div className={style.formGroup}>
                    <div className={style.formGroupItem}>
                        <label className="label">First Name</label>
                        <input
                            className="input"
                            type="text"
                            required
                            readOnly={readOnly}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>

                    <div className={style.formGroupItem}>
                        <label className="label">Last Name</label>
                        <input
                            className="input"
                            type="text"
                            required
                            readOnly={readOnly}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className={style.formItem}>
                    <label className="label">Email Address</label>
                    <input
                        className="input"
                        type="email"
                        required
                        readOnly={readOnly}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className={style.formItem}>
                    <label className="label">Phone</label>
                    <input
                        className="input"
                        type="text"
                        required
                        readOnly={readOnly}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={style.formItem}>
                    <label className="label">City</label>
                    <input
                        className="input"
                        type="text"
                        required
                        readOnly={readOnly}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </div>
                <div className={style.formItem}>
                    <label className="label">Address</label>
                    <textarea
                        className="textarea"
                        required
                        readOnly={readOnly}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <div className={style.formItem}>
                    <label className="label">Zip</label>
                    <input
                        className="input"
                        type="text"
                        required
                        readOnly={readOnly}
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                </div>
                <div className={style.formSubmit}>
                    <button
                        className={`button ${readOnly ? 'button--border' : 'button--full-red'} button--uppercase`}>
                        {readOnly ? 'Edit Address' : 'Save Address'}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default FormCheckoutComponent