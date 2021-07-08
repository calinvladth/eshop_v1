import React, {useEffect, useState} from "react";
import style from './index.module.sass'
import {SetAlert} from "../../../../redux/alerts/actions";
import {useDispatch} from "react-redux";
import {ValidateEmail, ValidateText} from "../../../../services/validators";

const FormCheckoutComponent = ({setBillingAddress}) => {
    const dispatch = useDispatch()
    const [readOnly, setReadOnly] = useState(false)

    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState({
        show: false,
        message: 'First name is required'
    })
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState({
        show: false,
        message: 'Last name is required'
    })
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState({
        show: false,
        message: 'A valid email is required'
    })
    const [phone, setPhone] = useState('')
    const [phoneError, setPhoneError] = useState({
        show: false,
        message: 'Phone number is required'
    })
    const [city, setCity] = useState('')
    const [cityError, setCityError] = useState({
        show: false,
        message: 'City is required'
    })
    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState({
        show: false,
        message: 'Address is required'
    })
    const [zip, setZip] = useState('')
    const [zipError, setZipError] = useState({
        show: false,
        message: 'Zip is required'
    })

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
        let pass = true

        if (!firstName && firstName.length === 0) {
            pass = false
            setFirstNameError({...firstNameError, show: true})
        }

        if (!lastName && lastName.length === 0) {
            pass = false
            setLastNameError({...lastNameError, show: true})
        }

        if (!email && email.length === 0) {
            pass = false
            setEmailError({...emailError, show: true})
        } else if (email && email.length > 0) {
            pass = ValidateEmail(email)
            setEmailError({...emailError, show: true})
        }

        if (!phone && phone.length === 0) {
            pass = false
            setPhoneError({...phoneError, show: true})
        }

        if (!city && city.length === 0) {
            pass = false
            setCityError({...cityError, show: true})
        }

        if (!address && address.length === 0) {
            pass = false
            setAddressError({...addressError, show: true})
        }

        if (!zip && zip.length === 0) {
            pass = false
            setZipError({...zipError, show: true})
        }

        if (pass) {
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
        } else {
            document.getElementById('billingForm').scrollIntoView()
        }
    }

    return (
        <div className={style.box}>
            <form id="billingForm" className={style.form} onSubmit={e => submit(e)}>
                <div className={style.formGroup}>
                    <div className={style.formGroupItem}>
                        <label className="label">First Name</label>
                        <input
                            className={`input ${firstNameError.show && !ValidateText(firstName) && "error"} ${ValidateText(firstName) && "success"}`}
                            type="text"
                            readOnly={readOnly}
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                        {
                            firstNameError.show && !ValidateText(firstName) &&
                            <span className="labelError">{firstNameError.message}</span>
                        }
                    </div>

                    <div className={style.formGroupItem}>
                        <label className="label">Last Name</label>
                        <input
                            className={`input ${lastNameError.show && !ValidateText(lastName) && "error"} ${ValidateText(lastName) && "success"}`}
                            type="text"
                            readOnly={readOnly}
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                        {
                            lastNameError.show && !ValidateText(lastName) &&
                            <span className="labelError">{lastNameError.message}</span>
                        }
                    </div>
                </div>
                <div className={style.formItem}>
                    <label className="label">Email Address</label>
                    <input
                        className={`input ${emailError.show && !ValidateEmail(email) && "error"} ${ValidateEmail(email) && "success"}`}
                        type="email"
                        readOnly={readOnly}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {
                        emailError.show && !ValidateEmail(email) &&
                        <span className="labelError">{emailError.message}</span>
                    }
                </div>
                <div className={style.formItem}>
                    <label className="label">Phone</label>
                    <input
                        className={`input ${phoneError.show && !ValidateText(phone) && "error"} ${ValidateText(phone) && "success"}`}
                        type="text"
                        readOnly={readOnly}
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {
                        phoneError.show && !ValidateText(phone) &&
                        <span className="labelError">{phoneError.message}</span>
                    }
                </div>
                <div className={style.formItem}>
                    <label className="label">City</label>
                    <input
                        className={`input ${cityError.show && !ValidateText(city) && "error"} ${ValidateText(city) && "success"}`}
                        type="text"
                        readOnly={readOnly}
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    {
                        cityError.show && !ValidateText(city) &&
                        <span className="labelError">{cityError.message}</span>
                    }
                </div>
                <div className={style.formItem}>
                    <label className="label">Address</label>
                    <textarea
                        className={`textarea ${addressError.show && !ValidateText(address) && "error"} ${ValidateText(address) && "success"}`}
                        readOnly={readOnly}
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {
                        addressError.show && !ValidateText(address) &&
                        <span className="labelError">{addressError.message}</span>
                    }
                </div>
                <div className={style.formItem}>
                    <label className="label">Zip</label>
                    <input
                        className={`input ${zipError.show && !ValidateText(zip) && "error"} ${ValidateText(zip) && "success"}`}
                        type="text"
                        readOnly={readOnly}
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                    />
                    {
                        zipError.show && !ValidateText(zip) &&
                        <span className="labelError">{zipError.message}</span>
                    }
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