import { useOutside } from '../../hooks/useOutside';
import cn from 'classnames';
import styles from './Atom.module.scss'

export const Atom = ({lang, setLang, planet}) => {

    const {isShow, setIsShow, ref} = useOutside(false);

    const openMenuHandler = ({ target }) => {
        if (!target.closest('div[class*="menu"]')) {
            setIsShow(!isShow)
        }
    }

    const colors = {
        'earth': 'blue',
        'mars': '#8e4700',
        'jupiter': '#413d38',
        'saturn': '#fff'
    };

    return (
        <div className={cn(styles["atom-wrapper"], {
            [styles.open]: isShow
        })} ref={ref} onClick={openMenuHandler}>
            <div className={styles["atom"]}>
                <div style={{borderColor: colors[planet]}}><div style={{borderColor: colors[planet]}}></div></div>
                <div style={{borderColor: colors[planet]}}><div style={{borderColor: colors[planet]}}></div></div>
                <div style={{borderColor: colors[planet]}}><div style={{borderColor: colors[planet]}}></div></div>
                <div style={{borderColor: colors[planet]}}><div style={{borderColor: colors[planet]}}></div></div>
            </div>

            <div className={styles.menu}>

                <div className={cn(styles.lang, {
                    [styles.en]: lang
                })} onClick={() => setLang(!lang)}>
                    <div className={styles.btn}></div>
                    <div className={styles.item}>Ru</div>
                    <div className={styles.item}>En</div>
                </div>

            </div>
        </div>
    )
};
