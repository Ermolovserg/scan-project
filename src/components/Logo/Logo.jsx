import styles from './logo.module.scss'
import logoColor from '../../assets/images/logo-color.png'
import { Link } from 'react-router-dom'
import { HOME_URL } from '../../utils/constants'

const Logo = ({ src = logoColor }) => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Link to={HOME_URL} className={styles.logo} onClick={scrollToTop}>
      <img src={src} alt="СКАН" />
    </Link>
  )
}

export default Logo