import React from 'react';
import styles from './ContentContainer.module.css';

function ContentContainer (props) {
  return (
    <div className={props.className}>
      { props.children }
    </div>
  );
}

export default ContentContainer;