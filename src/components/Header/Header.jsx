import styles from './header.module.scss'
import classNames from 'classnames/bind'
import { useState } from 'react'
import Logo from '../Logo/Logo'
import MainNav from '../Navigation/Navigation'
import Informer from '../Informer/Informer'
import UserNav from '../UserNav/UserNav'
import MenuToggle from '../MenuToggle/MenuToggle'
import logoWhite from '../../assets/images/logo-white.png'
import { useAuth } from '../../hooks/useAuth'

const cx = classNames.bind(styles)

const Header = () => {
  const [ showMobileMenu, setShowMobileMenu ] = useState(false)
  const { isLoggedIn } = useAuth()

  const headerClass = cx({
    header:true,
    opened: showMobileMenu
  })

  return (
    <header className={headerClass}>
      <Logo src={(showMobileMenu && logoWhite) || undefined} />
      <div className={styles.wrap}>
        <MainNav showMobileMenu={showMobileMenu} />
        {isLoggedIn && <Informer />}
        <UserNav showMobileMenu={showMobileMenu} />
      </div>
      <MenuToggle onClick={() => setShowMobileMenu(!showMobileMenu)}
              showMobileMenu={showMobileMenu}
      />
    </header>
  )
}

export default Header
