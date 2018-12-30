import React from 'react';
import styles from './PageBody.module.css';

function PageBody (props) {
  return (
    <div className={styles.wrapper}>
      { props.children }
    </div>
  )
}

export default PageBody;