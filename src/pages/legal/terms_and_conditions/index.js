import React, {useEffect} from "react";
import style from "../index.module.sass";
import {legalPagesData} from "../../../data";

export const TermsAndConditionsPath = '/terms_and_conditions'

const TermsAndConditionsPage = () => {
    useEffect(() => {
        document.title = 'Terms and conditions'
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                {legalPagesData.terms_and_conditions}
            </div>
        </div>
    )
}

export default TermsAndConditionsPage