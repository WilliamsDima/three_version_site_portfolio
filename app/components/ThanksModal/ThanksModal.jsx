import Image from 'next/image';
import styles from './ThanksModal.module.scss';
import keit from '../../assets/images/thank-eva.png';

export const ThanksModal = ({setThanksModal}) => {


  return (
    <div className={styles.modal} onClick={() => setThanksModal(false)}>
        <div>
            <Image 
            src={keit}
            width={918}
            height={990}
            alt={'thanks'}
            quality={100}
            className={styles['img']}/>
            
            <p className={styles['text']}>Thanks you!</p>
        </div>
        
    </div>
  )
}
