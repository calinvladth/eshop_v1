import React, {useEffect} from 'react'
import style from './layout.module.sass'
import HeroComponent from "./components/hero";
import FormSectionComponent from "./components/form_section";
import ScrollIntoView from "../../components/scroll_into_view";


const ContactPage = () => {
    useEffect(() => {
        document.title = 'Contact'
    }, [])
    return (
        <ScrollIntoView>
            <div className={style.box}>
                <section>
                    <HeroComponent/>
                </section>

                <section>
                    <FormSectionComponent/>
                </section>
            </div>
        </ScrollIntoView>
    )
}

export default ContactPage