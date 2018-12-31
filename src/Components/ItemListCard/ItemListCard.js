import React from 'react';
import styles from './ItemListCard.module.css';

function ItemListCard (props) {
  const { item, detailUrl, handleClick } = props;

  return (
    <div
      className={styles.card}
      onClick={() => handleClick(item.id, detailUrl)}>
      <h3>{ item.common_name }</h3>
      <p>{ item.short_description }</p>
      <span className={styles.colorBox} style={{ backgroundColor: item.color }}></span>
      <span className={styles.detailLink}>Details...</span>
    </div>
  );
}

export default ItemListCard;