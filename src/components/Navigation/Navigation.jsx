import styles from './navigation.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { MAIN_NAV_LINKS } from '../../utils/placeholders';
import { HOME_URL } from '../../utils/constants';

const cx = classNames.bind(styles);

const Navigation = ({ showMobileMenu }) => {
  const navClass = cx({
    nav: true,
    opened: showMobileMenu,
  });

  return (
    <nav className={navClass}>
      {MAIN_NAV_LINKS.map((link) => (
        <Link to={HOME_URL + link.path} key={link.path}>{link.name}</Link>
      ))}
    </nav>
  );
};

export default Navigation;
