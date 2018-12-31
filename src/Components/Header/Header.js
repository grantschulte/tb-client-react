import React from 'react';
import styles from './Header.module.css';

function Header (props) {
  return (
    <div className={styles.wrapper}>
      <div className='contentWrapper'>
        <a href='/' className={styles.logoLink}>
          <img src='/tacklebox-logo.png' alt='Tacklebox' />
        </a>
      </div>
    </div>
  );
}

export default Header;