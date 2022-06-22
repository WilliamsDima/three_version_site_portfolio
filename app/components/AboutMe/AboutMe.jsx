import { Mars } from '../Planets/Mars/Mars';
import styles from './AboutMe.module.scss'
import { AboutMeText } from './AboutMeText';

export const AboutMe = (props) => {
  
  return (
    <div className={styles.aboutme}>

      <AboutMeText />

      <Mars />

    </div>
  );
}
