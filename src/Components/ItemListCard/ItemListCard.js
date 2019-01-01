import React from 'react';
import PropTypes from 'prop-types';
import styles from './ItemListCard.module.css';

function ItemListCard (props) {
  const { item, detailUrl, handleClick } = props;

  return (
    <div
      className={styles.card}
      onClick={() => handleClick(detailUrl)}>
      <h3>{ item.common_name }</h3>
      <p>{ item.short_description }</p>
      <span className={styles.colorBox} style={{ backgroundColor: item.color }}></span>
      <span className={styles.detailLink}>Details...</span>
    </div>
  );
}

ItemListCard.propTypes = {
  detailUrl: PropTypes.string,
  handleClick: PropTypes.func,
  item: PropTypes.object
};

export default ItemListCard;