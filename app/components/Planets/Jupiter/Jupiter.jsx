import React, { useContext } from 'react';
import styles from './Jupiter.module.scss';
import { AppContext } from '../../../context/context';
import { TextInfoPlanet } from '../../ui/TextInfoPlanet';


const Jupiter = (props) => {

    const { setIndex, language } = useContext(AppContext);

    return (

        <div className={styles['planet-wrap']} onClick={() => setIndex(2)}>

        <div className={styles["jupiter"]}>

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

        <TextInfoPlanet text={language.planetsInfo.jupiter()} style={{top: 0, bottom: 'initial', left: 'initial', right: -35}}/>

        </div>

    )
}

export default Jupiter;