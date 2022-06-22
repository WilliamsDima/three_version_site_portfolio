import { AboutMe } from '../../AboutMe/AboutMe';
import { Main } from '../../Main/Main';
import { Skills } from '../../MySkills/PageSkills';
import {PageWorks} from '../../PageWorks/PageWorks';
import styles from './Screens.module.scss';


export const Screens = ({planet}) => {

    return (
    <div className={styles['screens-' + planet]}>
        <Main />
        <AboutMe />
        <Skills />
        <PageWorks />
    </div>
    )
}