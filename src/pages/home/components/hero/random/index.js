import React, {useEffect, useState} from 'react'
import style from './index.module.sass'

const RandomComponent = () => {
    const words = 'Your favorite store.'
    const [number, setNumber] = useState(0)

    useEffect(() => {
        const timer = setTimeout(() => {
            if (number < 4) setNumber(number + 1)
            else setNumber(1)
        }, 1000)

        return function cleanup() {
            clearTimeout(timer)
        }
    }, [number])

    function returnXWords(n) {
        let x = []
        for (let i = 0; i < number; i++) {
            x.push(words)
        }

        return x
    }


    return (
        <div className={style.box}>
            {
                returnXWords(number).map((o, index) => <p key={index}>{words}</p>)
            }


        </div>
    )
}

export default RandomComponent