import React from 'react';
import styles from './Title.module.scss'
import cn from 'classnames';


export const Title = ({text}) => {

    const arr = [...text];

    const content = arr.map((w, i) => <span key={i} 
    className={cn({[styles["m-r"]]: arr[i + 1] && arr[i + 1] === ' '
    })}
    data-text={w}>{w}</span> )

    return (
        <p className={styles["span-text"]}>
            {content}
        </p>
    )
};