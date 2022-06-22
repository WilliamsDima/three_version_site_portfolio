import React, { useContext } from 'react';
import { AppContext } from '../../context/context';
import { TextPage } from '../ui/TextPage';
import { Title } from '../ui/Title';
import styles from './AboutMe.module.scss'
import { Social } from './Social';


export const AboutMeText = (props) => {

    const { setModal, language } = useContext(AppContext);

    return (
           <div className={styles["about-me-text"]}>
                <Title text={language.titles.aboutMe}/>
            
                <TextPage text={language.aboutMeText()}/>

                <span className={styles["link-add-team"]} onClick={() => setModal(true)}>{language.aboutMeBtn}</span>

                <Social />

            </div>
    )
}