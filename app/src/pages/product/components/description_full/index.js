import React from 'react'
import style from './index.module.sass'

const DescriptionFullComponent = ({description}) => (
    <div className={style.box}>
        <div>
            <h1>Description</h1>
        </div>
        <div>
            <p>{description}</p>
        </div>
    </div>
)

export default DescriptionFullComponent