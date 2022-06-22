import { useContext } from 'react';
import { AppContext } from '../../context/context';
import { TextPage } from '../ui/TextPage';
import { Title } from '../ui/Title';
import style from './PageSkills.module.scss';


export const SkillsText = () => {

    const { language, setModal } = useContext(AppContext);

    return (
        <div className={style["skills-text"]}>
            
            <Title text={language.titles.skills}/>
        
            <TextPage text={language.skillsText(style, setModal)}/>
        </div>
    )
}