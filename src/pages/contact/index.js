import React, {useEffect} from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import FormSectionComponent from "./components/form_section";


const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact'
    }, [])
    return (
        <div className={style.box}>

            <section>
                <HeroComponent/>
            </section>

            <section>
                <FormSectionComponent/>
            </section>
        </div>
    )
}

export default ContactPage