import React, {useContext, useState} from 'react';
import styles from './Earth.module.scss';
import cn from 'classnames';
import stylesInfoScreen from './InfoScreen.module.scss';
import { TextInfoPlanet } from '../../ui/TextInfoPlanet';
import { AppContext } from '../../../context/context';


const Earth = (props) => {

    const [textHelp, setTextHelp] = useState(false);

    const { language, setIndex, planets, index } = useContext(AppContext);

    return (
        <div className={styles['planet-wrap']} onClick={() => setIndex(0)}>

            <div className={styles["earth"]}>

                <div className={styles["dark"]}>
                    <div className={styles["planet"]}> 
                        <div className={styles["wrap"]}>
                            <div className={styles["background"]}></div>
                            <div className={styles["clouds"]}></div>   
                        </div>

                        <div className={styles["mask"]}></div>
                    </div>
                </div>

            </div>  

            <div className={cn(stylesInfoScreen['block-info-screen'], {
                [stylesInfoScreen.show]: textHelp
            })}>
                <div className={stylesInfoScreen['btn-show-text']} onClick={() => setTextHelp(true)}>!</div>
                <div className={stylesInfoScreen['text-info']}>{language.infoNavigation}</div>
            </div>

            <TextInfoPlanet text={language.planetsInfo.earth()}/>
    </div>
    )
}

export default Earth;