import React from 'react'
import style from "./index.module.sass";
import {setBackgroundImage} from "../../../../../services/image";
import {api} from "../../../../../config";

const DetailsComponent = ({product = {}, images = [], primaryImage={}, setPrimaryImage}) => (
    <div className={style.box}>

        <div>
            <p>{product.data.description_short}</p>
        </div>

        <div className={style.gallery}>
            {
                images.map((o, i) => <div
                    key={o.id}
                    style={setBackgroundImage(api + o.path)}
                    className={primaryImage.id === o.id ? style.imageActive : null}
                    onClick={() => setPrimaryImage(o)}
                >&nbsp;</div>)
            }
        </div>
    </div>
)

export default DetailsComponent