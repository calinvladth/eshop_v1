import React from "react";
import style from './index.module.sass'
import ScrollIntoView from "../scroll_into_view";

const ConfirmationComponent = ({icon, children}) => {
    return (
        <ScrollIntoView>
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
        </ScrollIntoView>
    )
}

export default ConfirmationComponent