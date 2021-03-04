import React from "react";
import style from './index.module.sass'
import SectionTitleComponent from "../../../../components/section_title";

const AboutComponent = () => (
    <div className={style.box}>
        <div className={style.boxContent}>

            <div>
                <SectionTitleComponent title={'Everything you need to know about us'}/>
            </div>

            <div className={style.boxParagraph}>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam officiis quibusdam tenetur vero
                    voluptate. Accusamus accusantium ad corporis dicta eum fugiat impedit, inventore labore laboriosam
                    libero nemo nihil optio perspiciatis possimus sapiente sunt tempore unde ut vitae voluptas? Amet ex
                    fugit pariatur, quas rerum saepe.</p>
            </div>
        </div>
    </div>
)

export default AboutComponent