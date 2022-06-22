import Jupiter from '../Planets/Jupiter/Jupiter';
import style from './PageSkills.module.scss';
import {SkillsText} from './SkillsText';


export const Skills = (props) => {
    
    return (
        <div className={style.skills}>
            <SkillsText />
            <Jupiter />
        </div>
    )
}