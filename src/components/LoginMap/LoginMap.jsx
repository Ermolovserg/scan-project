import styles from './login-map.module.scss';
import Button from '../Button/Button';
import { ReactComponent as GoogleSVG } from '../../assets/images/google.svg';
import { ReactComponent as FacebookSVG } from '../../assets/images/facebook.svg';
import { ReactComponent as YandexSVG } from '../../assets/images/yandex.svg';
import { HOME_URL } from '../../utils/constants';

const LoginMap = ({ children }) => {
  return (
    <div className={styles.map}>
      <nav className={styles.nav}>
        <a href={HOME_URL}>Войти</a>
        <a href="/login">Зарегистрироваться</a>
      </nav>

      {children}

      <span>Войти через:</span>
      <p className={styles.social}>
        <Button size="soc">
          <GoogleSVG />
        </Button>

        <Button size="soc">
          <FacebookSVG />
        </Button>

        <Button size="soc">
          <YandexSVG />
        </Button>
      </p>
    </div>
  );
};

export default LoginMap;

