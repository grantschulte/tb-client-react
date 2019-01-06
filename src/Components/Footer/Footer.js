import React from 'react';
import { Link } from 'react-router-dom';
import { menus } from '../../config/menus.config';
import styles from './Footer.module.css';
import Container from '../Container/Container';

function Footer () {
  let sorted = [...menus.footer].sort((a, b) => a.order - b.order);

  return (
    <footer className={styles.wrapper}>
      <Container className='mh3'>
        {sorted.map((item, i) => (
          <Link
            className='mv1 mh2'
            key={item.name}
            to={item.path}>{item.label}</Link>
        ))}
      </Container>
    </footer>
  );
}

export default Footer;