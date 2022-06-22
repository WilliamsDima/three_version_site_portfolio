import styles from './TextPage.module.scss';

export const TextPage = ({text}) => {
    
    return (
        <div className={styles['text-page']}>
            {text}
        </div>
    )
}
