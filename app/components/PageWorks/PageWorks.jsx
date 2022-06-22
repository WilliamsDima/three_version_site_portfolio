import React, { useState } from 'react';
import { Saturn } from '../Planets/Saturn/Saturn';
import {ModelWork} from './ModelWork';
import {MyWorks} from './MyWorks';
import styles from './PageWorks.module.scss';

export const PageWorks = (props) => {

    const [modal, setModal] = useState(0);

    return (
        <div className={styles.works}>

            {modal && <ModelWork setModal={setModal} modal={modal}/>}
            
            <MyWorks setModal={setModal}/>
            
            <Saturn />
        </div>
    )
}