import React, {useMemo, useState} from "react";
import {CardCvcElement, CardExpiryElement, CardNumberElement, useElements, useStripe} from "@stripe/react-stripe-js";
import axios from "axios";
import {api} from "../../../../config";
import useResponsiveFontSize from "./responsiveFontSize";

import style from './index.module.sass'
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router";
import {CreateOrder} from "../../../../redux/order/actions";
import {SetAlert} from "../../../../redux/alerts/actions";

const useOptions = () => {
    const fontSize = useResponsiveFontSize();
    const options = useMemo(
        () => ({
            style: {
                base: {
                    fontSize,
                    color: "#424770",
                    letterSpacing: "0.025em",
                    fontFamily: "Source Code Pro, monospace",
                    "::placeholder": {
                        color: "#aab7c4"
                    }
                },
                invalid: {
                    color: "#9e2146"
                }
            }
        }),
        [fontSize]
    );

    return options;
};


const PaymentComponent = () => {
    const elements = useElements();
    const stripe = useStripe();
    const options = useOptions()
    const billingAddress = JSON.parse(localStorage.getItem('billingAddress'))
    const cart = useSelector(state => state.cart)
    const history = useHistory()
    const dispatch = useDispatch()

    const {config} = useSelector(state => state)


    const initialFocus = {
        'active': false,
        'element': ''
    }

    const [focus, setFocus] = useState(initialFocus)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault();
        setLoading(true)

        const payload = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardNumberElement),
            billing_details: {
                'name': `${billingAddress.firstName} ${billingAddress.lastName}`,
                'email': billingAddress.email,
                'address': {
                    'city': billingAddress.city,
                    'line1': billingAddress.address,
                    'postal_code': billingAddress.zip
                }
            }
        });
        if (payload.error) {
            dispatch(SetAlert({
                success: false,
                message: payload.error.message
            }))
        } else {
            const {data} = await axios.post(`${api}/payment/`, {
                amount: cart.data.total_price
            })

            const clientSecret = data.data

            const {paymentIntent, error} = await stripe.confirmCardPayment(clientSecret, {
                payment_method: payload.paymentMethod.id
            });

            if (error) {
                dispatch(SetAlert({
                    success: false,
                    message: error.message
                }))
            } else {
                if (paymentIntent.status === 'succeeded') {
                    const orderData = {
                        products: cart.data.products,
                        billing_address: billingAddress,
                        total_products_price: cart.data.total_products_price,
                        shipping_price: cart.data.shipping,
                        total_price: cart.data.total_price,
                        currency: config.data.payment.currency,
                        payment: {
                            card: true,
                            payment_id: paymentIntent.id
                        }
                    }

                    dispatch(CreateOrder(orderData, history))
                }
            }
        }
        setLoading(false)
    };

    return (
        <form className={style.box} onSubmit={handleSubmit}>
            <div className={style.boxTitle}>
                <h1>Payment</h1>
            </div>

            <div className={style.boxItem}>
                <label className="label">
                    Card number
                </label>
                <div className={`input ${focus.active && focus.element === 'c_number' && style.boxBorder}`}>
                    <CardNumberElement
                        options={options}
                        onBlur={() => {
                            setFocus(initialFocus)
                        }}
                        onFocus={() => {
                            setFocus({
                                active: true,
                                element: 'c_number'
                            })
                        }}
                    />
                </div>
            </div>

            <div className={style.boxGroup}>
                <div className={style.boxItem}>
                    <label className="label">
                        Expiration date
                    </label>
                    <div className={`input ${focus.active && focus.element === 'c_exp' && style.boxBorder}`}>
                        <CardExpiryElement
                            options={options}
                            onBlur={() => {
                                setFocus(initialFocus)
                            }}
                            onFocus={() => {
                                setFocus({
                                    active: true,
                                    element: 'c_exp'
                                })
                            }}
                        />
                    </div>
                </div>

                <div className={style.boxItem}>
                    <label className="label">
                        CVC
                    </label>
                    <div className={`input ${focus.active && focus.element === 'c_cvc' && style.boxBorder}`}>
                        <CardCvcElement
                            options={options}
                            onBlur={() => {
                                setFocus(initialFocus)
                            }}
                            onFocus={() => {
                                setFocus({
                                    active: true,
                                    element: 'c_cvc'
                                })
                            }}
                        />
                    </div>
                </div>

            </div>

            <div className={style.boxButton}>
                <button className="button button--full-red" type="submit" disabled={!stripe}>
                    {loading ? 'Submitting ...' : 'Submit Order'}
                </button>
            </div>

        </form>
    );
};

export default PaymentComponent