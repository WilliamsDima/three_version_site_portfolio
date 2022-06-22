import Earth from '../Planets/Earth/Earth';
import Jupiter from '../Planets/Jupiter/Jupiter';
import { Mars } from '../Planets/Mars/Mars';
import { Saturn } from '../Planets/Saturn/Saturn';
import styles from './MobileMenu.module.scss';
import cn from 'classnames';


export const MobileMenu = ({currentPlanet}) => {

    return (
    <div className={cn(styles['mobile-menu'], {
        [styles[currentPlanet]]: currentPlanet
    })}>
            <Earth />
            <Mars />
            <Jupiter />
            <Saturn />
    </div>
    )
}