import Earth from '../Planets/Earth/Earth';
import styles from './Main.module.scss'
import { TextHello } from './TextHello/Text';

export const Main = (props) => {
  return (
    <div className={styles.main}>
      <TextHello />

      <Earth />
    </div>
  );
}
