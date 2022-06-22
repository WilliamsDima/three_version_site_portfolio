import Image from 'next/image';
import React, { useContext } from 'react';
import { APP_URL } from '../../constants';
import { AppContext } from '../../context/context';
import styles from './ModelWork.module.scss';

export const ModelWork = ({setModal, modal}) => {

    const { works } = useContext(AppContext);

    const worksList = works && works.find((it) => it.works.find((w) => w.id === modal));
    const work = worksList && worksList.works.find((it) => it.id === modal);

    const closeHandler = ({target}) => {
        if (!target.closest('div[class*="content"]') 
        || target.closest('div[class*="close-btn"]')) {
            setModal(0)
        }
    };
    
    return (
        <div className={styles.modal} onClick={closeHandler}>
            <div className={styles.content}>
                {work && <><Image
                    src={`${APP_URL}${work.img}`}
                    width={1850}
                    height={950}
                    alt={work.name}
                    quality={100}
                    className={styles['img']} />
                    <div className={styles['close-btn']}></div></>}
            </div>
        </div>
    )
};