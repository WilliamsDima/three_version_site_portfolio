import stylesInfoPlanet from './InfoPlanet.module.scss';
import cn from 'classnames';
import { useOutside } from '../../hooks/useOutside';

export const TextInfoPlanet = ({text, style = {}}) => {

    const {isShow, setIsShow, ref} = useOutside(false);
    
    return (
        <div className={cn(stylesInfoPlanet['block-info-planet'], {
            [stylesInfoPlanet.show]: isShow
        })} ref={ref} style={{...style}}>
            <div className={stylesInfoPlanet['btn-show-text']} onClick={() => setIsShow(!isShow)}>?</div>
            <div className={stylesInfoPlanet['btn-close-text']} onClick={() => setIsShow(false)}></div>

            <div className={stylesInfoPlanet['planet-text']}>
                {text}
            </div>
        </div>
    )
}
