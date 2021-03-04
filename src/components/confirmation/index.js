import React, {useEffect} from "react";
import style from './index.module.sass'

const ConfirmationComponent = ({icon, children}) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div>
                    <div className={style.icon}>
                        {icon}
                    </div>

                    <div className={style.children}>
                        {children}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default ConfirmationComponent