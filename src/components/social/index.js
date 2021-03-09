import React from "react";
import style from './index.module.sass'
import {socialMediaData} from "../../data";

const SocialComponent = ({horizontal = true}) => (
    <div className={`${style.box} ${horizontal ? style.horizontal : style.vertical}`}>
        {
            socialMediaData.map(o => <span key={o.name}>
                <a
                    href={o.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src={o.icon} alt={o.name}/>
                </a>
            </span>)
        }
    </div>
)

export default SocialComponent