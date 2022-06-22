import Image from 'next/image';
import React, { useContext } from 'react';
import { APP_URL } from '../../constants';
import styles from './PageWorks.module.scss';
import stylesWorks from './Works.module.scss';
import cn from 'classnames';
import { AppContext } from '../../context/context';

const scrollHandler = (evt) => {
        
    const list = evt.target.closest('div[class*="works_list"]');
    evt.isDefaultPrevented();
    list.scrollLeft += evt.deltaY;
};


const worksItem = (app, setModal, language) => {
    
    return app.map((el) => {
        
        return <div key={el.id} className={stylesWorks[`work`]}  onWheel={scrollHandler}>

            <div className={cn(stylesWorks['img-wrapper'], {
                [stylesWorks['app']]: el.img.includes('app')
            })}>
                <Image 
                    src={`${APP_URL}${el.img}`}
                    width={1850}
                    height={950}
                    alt={el.name}
                    quality={100}
                    className={stylesWorks['img']} />
            </div>

            <div className={stylesWorks["info-block"]}>

                <h3>{el.name}</h3>

                <div className={stylesWorks["stek-block"]}>
                    {el.steck.map((stek, i) => <p key={i} className={stylesWorks["stek"]}>
                        {stek}
                    </p>)}
                </div>



                <p className={stylesWorks["date"]}>{el.date}</p>

                <a className={stylesWorks["link"]} href={el.link} target={'_blank'} rel="noreferrer">{el.textLink}</a>

                {el.increase && <div className={stylesWorks["increase-btn"]} onClick={() => setModal(el.id)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 296.305 296.305"
                        style={{
                        enableBackground: "new 0 0 296.305 296.305",
                        width: 30,
                        height: 30
                        }}
                        xmlSpace="preserve">
                        <path d="M132.997 47.168c-23.662-23.663-62.166-23.664-85.83 0-23.663 23.664-23.663 62.167 0 85.829 11.463 11.463 26.704 17.776 42.915 17.776s31.452-6.313 42.915-17.775c11.463-11.463 17.776-26.704 17.776-42.915s-6.312-31.452-17.776-42.915zm-12.728 73.102c-8.063 8.063-18.783 12.503-30.187 12.503-11.403 0-22.124-4.44-30.187-12.503-16.645-16.645-16.645-43.729 0-60.374 8.324-8.324 19.254-12.484 30.187-12.484 10.931 0 21.865 4.162 30.187 12.483 8.063 8.063 12.503 18.784 12.503 30.187.001 11.404-4.439 22.124-12.503 30.188z" />
                        <path d="m293.669 242.36-81.224-81.224a9 9 0 0 0-12.728 0l-1.251 1.251-29.231-29.231c18.578-34.18 13.451-77.926-15.423-106.8-35.14-35.139-92.317-35.139-127.457 0-35.139 35.14-35.139 92.317 0 127.457 17.57 17.569 40.649 26.354 63.728 26.354 14.85 0 29.69-3.658 43.072-10.932l29.232 29.232-1.251 1.251a9 9 0 0 0 0 12.728l81.224 81.224c1.757 1.757 4.061 2.636 6.364 2.636s4.606-.879 6.364-2.636l38.582-38.582a9 9 0 0 0-.001-12.728zM39.083 141.084c-28.122-28.122-28.122-73.879 0-102.001 14.061-14.061 32.531-21.091 51.001-21.091s36.939 7.03 51 21.091c28.122 28.122 28.122 73.879 0 102.001-28.122 28.121-73.879 28.12-102.001 0zm109.178 17.801a90.703 90.703 0 0 0 5.551-5.074 90.392 90.392 0 0 0 5.073-5.551l26.853 26.853-10.625 10.625-26.852-26.853zm100.462 115.692-68.496-68.496 25.854-25.854 68.496 68.496-25.854 25.854z" />
                        <path d="M108.286 81.083h-9.204V71.88c0-4.971-4.029-9-9-9s-9 4.029-9 9v9.203H71.88c-4.971 0-9 4.029-9 9s4.029 9 9 9h9.203v9.204c0 4.971 4.029 9 9 9s9-4.029 9-9v-9.204h9.204a9 9 0 1 0-.001-18z" />
                    </svg>
                </div>}


            </div>

        </div>
    });
};

export const MyWorks = ({setModal}) => {

    const { works, language } = useContext(AppContext);

    const worksElement = works.map((el, i) => {
        return (
            <section className={styles["works_item"]} key={i} >
                <h2>{el.title}</h2>

                <div className={stylesWorks["works_list"]} onWheel={scrollHandler}>
                {worksItem(el.works, setModal, language)}
                </div>
            </section>
        );
    });




    return (
        <div className={styles['works_block']}>
            {worksElement}
        </div>
    )
};