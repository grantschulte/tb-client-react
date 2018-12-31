import React from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './Header.module.css';

function Header (props) {
  return (
    <div className={styles.wrapper}>
      <ContentContainer className='mh2 flex items-center h-100'>
        <a href='/' className={styles.logoLink}>
          <img src='/tacklebox-logo.png' alt='Tacklebox' />
        </a>
      </ContentContainer>
    </div>
  );
}

export default Header;