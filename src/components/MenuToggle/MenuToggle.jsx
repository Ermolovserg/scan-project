import React from 'react';
import styles from './menuToggle.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const MenuToggle = ({ onClick, showMobileMenu }) => {
  const burgerClass = cx({
    burger: true,
    opened: showMobileMenu,
  });

  return (
    <button 
      className={burgerClass} 
      onClick={onClick} 
      aria-label="Toggle menu"
    />
  );
};

export default MenuToggle;
