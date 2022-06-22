import { useContext } from 'react';
import { AppContext } from '../../../context/context';
import { Title } from '../../ui/Title';
import styles from './Text.module.scss'

export const TextHello = (props) => {

    const { setModal, language } = useContext(AppContext);

    return (
        <div className={styles.info}>
            <div className={styles["text__content"]}>
                <p className={styles["text__me"]}>Hi, I’m&nbsp; 
                    <span className={styles["glitch"]} data-text="Dmitry">Dmitry</span>
                </p>
                
                <Title text={language.titles.main}/>

                <p className={styles["prof__me"]}>Frontend developer / Android developer / and just a good person</p>
                
                <div className={styles["send-link"]} onClick={() => setModal(true)}>
                    <button to='/send' className={styles["send-btn"]}>{language.sendBtn}</button>
                </div>
            </div>
        </div>
    )
};
