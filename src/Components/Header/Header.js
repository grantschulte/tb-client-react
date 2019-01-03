import React from 'react';
import { Icon, Image } from 'semantic-ui-react';
import MobileMenu from '../MobileMenu/MobileMenu';
import Container from '../Container/Container';
import { cssString } from '../../utils/css.utils';
import styles from './Header.module.css';

function Header (props) {
  const { mobileMenu } = props;

  const toggleMobileMenu = () => {
    if (mobileMenu.isOpen) {
      props.closeMobileMenu();
    } else {
      props.openMobileMenu();
    }
  };

  return (
    <Container
      className={cssString(styles.wrapper, 'flex items-center justify-between ph3')}>
      
      <Image
        href='/'
        src='/tacklebox-logo.png'
        alt='Tacklebox'
        size='small' />

      <div
        className='flex items-center justify-center'
        style={{ width: '45px', height: '45px', marginRight: '-10px' }}
        onClick={toggleMobileMenu}>
        <Icon
          name='bars'
          size='big'
          fitted />
      </div>

      {mobileMenu.isOpen &&
        <MobileMenu toggleMobileMenu={toggleMobileMenu} />
      }
    </Container>
  );
}

export default Header;