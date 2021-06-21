import React from "react";
import style from './index.module.sass'
import {api} from "../../../../../config";
import {setBackgroundImage} from "../../../../../services/image";

const ActiveImageComponent = ({images, primaryImage}) => (
    <div className={style.box}>
        {
            images.length > 0
            && <div style={setBackgroundImage(api + primaryImage.path)}>&nbsp;</div>

        }
    </div>
)

export default ActiveImageComponent