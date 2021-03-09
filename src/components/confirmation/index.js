import React, {createRef, useEffect} from "react";
import style from './index.module.sass'

const ConfirmationComponent = ({icon, children}) => {
    const confirmationRef = createRef()
    useEffect(() => {
        confirmationRef.current.scrollIntoView()
    }, [confirmationRef, icon])
    return (
        <div className={style.box} ref={confirmationRef}>
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