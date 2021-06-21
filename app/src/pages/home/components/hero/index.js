import React from 'react'
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import SocialComponent from "../../../../components/social";
import RandomComponent from "./random";
import {homepageData} from "../../../../data";

const HeroComponent = () => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div className={style.boxImages}>
                    <div className={style.firstImage}>
                        <div style={setBackgroundImage(homepageData.image_1)}>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div className={style.boxIcons}>
                            <SocialComponent horizontal={false}/>
                        </div>

                        <div className={style.boxLogo}>
                            <span>
                                <img src={homepageData.spinner} alt="" width="100%"/>
                            </span>
                        </div>
                    </div>
                    <div className={style.secondImage} style={setBackgroundImage(homepageData.image_2)}>&nbsp;</div>
                </div>

                <div className={style.boxRandom}>
                    <span>
                        <RandomComponent/>
                    </span>
                </div>

            </div>
        </div>
    )
}

export default HeroComponent