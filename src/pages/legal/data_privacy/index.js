import React, {useEffect} from "react";
import style from '../index.module.sass'

export const DataPrivacyPath = '/data_privacy'

const DataPrivacyPage = () => {
    useEffect(() => {
        document.title = 'Data privacy'
    }, [])

    return (
        <div className={style.box}>
            <div className={style.boxContent}>
                <h1>Data privacy</h1>
            </div>
        </div>
    )
}

export default DataPrivacyPage