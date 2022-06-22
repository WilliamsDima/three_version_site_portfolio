import styles from './Stars.module.scss'


export const Stars = (props) => {

    return (
        <div className={styles["stars-skay"]}>
            <div className={styles.stars}></div>
            <div className={styles.twinkling}></div>
        </div>
    )
};