import React, {useState} from "react";
import {user_reviews} from "./data";
import style from "./index.module.sass";
import QuoteUpPNG from "../../assets/icons/quote_up.png";
import QuoteDownPNG from "../../assets/icons/quote_down.png";


const UserReviewsComponent = () => {
    const [active, setActive] = useState(user_reviews[0])

    return (
        <div>
            <div className={style.box}>
                <div className={[style.quote, style.quoteUp].join(' ')}>
                    <img src={QuoteUpPNG} alt=""/>
                </div>
                <div className={[style.quote, style.quoteDown].join(' ')}>
                    <img src={QuoteDownPNG} alt=""/>
                </div>
                <div>
                    <p className="font__paragraph">{active.text}</p>
                </div>
                <div className={style.author}>
                    <h1 className="font font__subtitle">{active.author}</h1>
                </div>
            </div>

            <div className={style.dotsBox}>

                {
                    user_reviews.map(o => {
                        return <div
                            className={[style.dotsBoxDot, o.id === active.id ? style.dotsBoxDotActive : null].join(' ')}
                            key={o.id}
                            onClick={() => setActive(o)}>
                            &nbsp;</div>
                    })
                }

            </div>
        </div>
    )
}


export default UserReviewsComponent