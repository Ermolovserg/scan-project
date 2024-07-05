import styles from './userNav.module.scss';
import classNames from 'classnames/bind';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { LOGIN_URL, HOME_URL } from '../../utils/constants';
import { useAuth } from '../../hooks/useAuth';
import { logout } from '../../redux/slices/authSlice';

const cx = classNames.bind(styles);

const UserNav = ({ showMobileMenu }) => {
  const { isLoggedIn, user } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navClass = cx({
    nav: true,
    isLoggedIn,
    opened: showMobileMenu,
  });

  const linkClass = cx({
    link: true,
    isLoggedIn,
    notLogged: !isLoggedIn,
  });

  const handleLoginClick = () => navigate(LOGIN_URL);

  const handleLogoutClick = () => {
    dispatch(logout());
    navigate(HOME_URL);
  };

  return (
    <nav className={navClass}>
      <a href="/login" className={linkClass}>
        {isLoggedIn ? user.name : 'Зарегистрироваться'}
      </a>

      {isLoggedIn && <img src={user.avatar} alt="аватар" className={styles.img} />}

      <button
        className={linkClass}
        onClick={isLoggedIn ? handleLogoutClick : handleLoginClick}
      >
        {isLoggedIn ? 'Выйти' : 'Войти'}
      </button>
    </nav>
  );
};

export default UserNav;
