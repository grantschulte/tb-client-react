import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../../config/menus.config';
import styles from './Footer.module.css';

function Footer () {
  let sorted = [...menus.footer].sort((a, b) => a.order - b.order);

  return (
    <footer className={styles.wrapper}>
      {sorted.map((item, i) => (
        <Link
          className='mv1 mh2'
          key={`footer-nav-${i}`}
          to={item.path}>{item.label}</Link>
      ))}
    </footer>
  );
}

export default Footer;