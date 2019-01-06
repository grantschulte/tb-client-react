import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import { menus } from '../../config/menus.config';
import styles from './MobileMenu.module.css';

function MobileMenu (props) {
  let sorted = [...menus.mobile].sort((a, b) => a.order - b.order);

  return (
    <div className={styles.wrapper}>
      <nav>
        <ul className={styles.list}>
          {sorted.map((item, i) => {
            return (
              <li
                key={item.name}
                className='reset'>
                <Link
                  className={styles.link}
                  to={item.path}
                  onClick={props.toggleMobileMenu}>
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <Icon
        className={styles.close}
        name='close'
        size='big'
        onClick={props.toggleMobileMenu}
        fitted
        inverted />
    </div>
  );
}

export default MobileMenu;