import React, {useEffect} from "react";
import style from "../index.module.sass";

export const TermsAndConditionsPath = '/terms_and_conditions'

const TermsAndConditionsPage = () => {
    useEffect(() => {
        document.title = 'Terms and conditions'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <h1>Terms and conditions</h1>
            </div>
        </div>
    )
}

export default TermsAndConditionsPage