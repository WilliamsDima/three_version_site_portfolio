import React, { useContext } from 'react';
import styles from './Mars.module.scss';
import { AppContext } from '../../../context/context';
import { TextInfoPlanet } from '../../ui/TextInfoPlanet';


export const Mars = (props) => {

    const { setIndex, language } = useContext(AppContext);
    
    return (
        <div className={styles['planet-wrap']} onClick={() => setIndex(1)}>

            <div className={styles["mars"]}>

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

            <TextInfoPlanet text={language.planetsInfo.mars()}/>

        </div>

    )
}
