import { useState } from 'react';
import { Atom } from '../../Atom/Atom';
import { Circles } from '../../Circles/Circles';
import { Stars } from '../../StarsBG/Stars';
import { MetaTitle } from '../../ui/MetaTitle';
import styles from './Home.module.scss'
import { Screens } from './Screens';
import cn from 'classnames';
import { MySendForm } from '../../Form/MySendForm';
import { formAPI } from '../../Form/formApi';
import { ThanksModal } from '../../ThanksModal/ThanksModal';
import { getLanduage } from '../../../hooks/lang';
import { AppContext } from '../../../context/context';
import { MobileMenu } from '../../MobileMenu/MobileMenu';

export const Home = ({works}) => {

  const planets = ['earth', 'mars', 'jupiter', 'saturn']

  const [lang, setLang] = useState(false);
  const [index, setIndex] = useState(0);
  const [modal, setModal] = useState(false);
  const [thanksModal, setThanksModal] = useState(false);

  const language = getLanduage(lang ? 'en': 'ru');

  const currentPlanet = planets[index];

  const sendForm = (data) => {
    formAPI.form(data);
    setThanksModal(true);
  };

  const contextValue = {
    lang, setLang, index, setIndex, modal, setModal, currentPlanet, language, works, planets
  };

  return (
    <AppContext.Provider value={contextValue}>
        <div className={styles['wrapper-page']}>
          <MetaTitle title={'Dmitry Developer'}/>
          <Stars />
          <Atom lang={lang} setLang={setLang} planet={currentPlanet}/>
          <Circles />

          {thanksModal && <ThanksModal setThanksModal={setThanksModal} />}

          {modal && <MySendForm setModal={setModal} sendForm={sendForm} language={language}/>}
          
          <Screens planet={currentPlanet}/>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{
              enableBackground: "new 0 0 45.58 45.58",
            }}
            xmlSpace="preserve"
            className={cn(styles.btnBackScreen, {
              [styles.back]: currentPlanet !== 'earth'
            })} onClick={() => setIndex(planets[index - 1] &&  index - 1 || 0)}>
            <path d="M45.506 33.532c-1.741-7.42-7.161-17.758-23.554-19.942V7.047a3.372 3.372 0 0 0-5.762-2.376L1.305 19.63a4.48 4.48 0 0 0-.001 6.32L16.19 40.909a3.373 3.373 0 0 0 5.763-2.376v-6.331c5.593.007 13.656.743 19.392 4.313a2.766 2.766 0 0 0 3.08-.101 2.766 2.766 0 0 0 1.081-2.882z" />
          </svg>

          <div className={styles['my-text']}>
              <p>&lt;sorry I <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"></path></svg> space&gt;</p>
              <p>&lt;you get what you give you&gt;</p>
          </div>

          <MobileMenu currentPlanet={currentPlanet}/>
      </div>
    </AppContext.Provider>
  )
}
