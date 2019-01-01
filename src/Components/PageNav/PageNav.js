import React from 'react';
import { NavLink } from 'react-router-dom';
import { menus } from '../../config/menus.config';
import styles from './PageNav.module.css';

function PageNav () {
  return (
    <ul className={styles.list}>
      {menus.ContentContainer.map((item, i) => (
        <li
          key={`page-nav-list-item-${i}`}
          className={styles.listItem}>
          <NavLink
            className='navLink'
            key={`app-nav-link-${i}`}
            exact={item.exact}
            to={item.path}>{item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  );
}

export default PageNav;