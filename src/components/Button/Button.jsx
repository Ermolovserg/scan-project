import React from 'react';
import styles from './button.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const openInNewTab = (url) => {
  window.open(url, '_blank', 'noreferrer');
};

const Button = ({
  color,
  size,
  href,
  type,
  disabled,
  onClick,
  newWindow,
  children
}) => {
  const btnClass = cx({
    btn: !size,
    [`btn-${size}`]: size,
    [`${color}`]: color,
  });

  const Tag = href ? 'a' : 'button';

  const handleOnBlankClick = (e) => {
    e.preventDefault();
    openInNewTab(href);
  };

  if (Tag === 'a') {
    return (
      <a
        className={btnClass}
        href={href}
        onClick={newWindow ? handleOnBlankClick : onClick}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={btnClass}
      type={type || 'button'}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;