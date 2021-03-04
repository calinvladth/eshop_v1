import React from 'react'
import style from './index.module.sass'
import {setBackgroundImage} from "../../../../services/image";
import FirstImage from '../../../../assets/images/jocelyn-morales-194bECy6A64-unsplash.jpg'
import SecondImage from '../../../../assets/images/jocelyn-morales-i7oPlKjczUs-unsplash.jpg'
import SocialComponent from "../../../../components/social";
import RandomComponent from "./random";
import SpinGif from '../../../../assets/images/spin.gif'

const HeroComponent = () => {
    return (
        <div className={style.box}>
            <div className={style.boxContent}>

                <div className={style.boxImages}>
                    <div className={style.firstImage}>
                        <div style={setBackgroundImage(FirstImage)}>&nbsp;</div>
                        <div>&nbsp;</div>
                        <div className={style.boxIcons}>
                            <SocialComponent horizontal={false}/>
                        </div>

                        <div className={style.boxLogo}>
                            <span>
                                <img src={SpinGif} alt="" width="100%"/>
                            </span>
                        </div>
                    </div>
                    <div className={style.secondImage} style={setBackgroundImage(SecondImage)}>&nbsp;</div>
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