import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import Container from '../Container/Container';
import { cssString } from '../../utils/css.utils';
import styles from './Header.module.css';

function Header () {
  return (
    <Container
      className={cssString(styles.wrapper, 'flex items-center justify-between ph3')}>
      <Image
        href='/'
        src='/tacklebox-logo.png'
        alt='Tacklebox'
        size='small' />
      <Icon name='bars' size='large' />
    </Container>
  );
}

export default Header;