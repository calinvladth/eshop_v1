import React, {useEffect} from "react";
import style from '../index.module.sass'
import {legalPagesData} from "../../../data";

export const DataPrivacyPath = '/data_privacy'

const DataPrivacyPage = () => {
    useEffect(() => {
        document.title = 'Data privacy'
    }, [])

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                {legalPagesData.data_privacy}
            </div>
        </div>
    )
}

export default DataPrivacyPage