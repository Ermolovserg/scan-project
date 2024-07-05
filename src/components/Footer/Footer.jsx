import styles from './footer.module.scss'
import Logo from '../Logo/Logo'
import logoWhite from '../../assets/images/logo-white.png'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrap}>
        <Logo src={logoWhite} />
        <div>
          <p className={styles.contacts}>
            <span>г. Москва, Цветной б-р, 40</span>
            <a href="tel:+74957712111">+7 495 771 21 11</a>
            <a href="mailto:info@skan.ru">info@skan.ru</a>
          </p>
          <span>Copyright. 2024</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
