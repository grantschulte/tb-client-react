import React from 'react';

function ItemDetail (props) {
  const item = props.itemsList.activeItem || {};

  return (
    <div>
      <h1>{ item.common_name }</h1>
      <p style={{ fontStyle: 'italic', marginTop: 0 }}>{ item.long_name }</p>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img style={{ width: '400px' }} src={ item.image } alt={ item.common_name } />
        <p>{ item.long_description }</p>
      </div>
    </div>
  );
}

export default ItemDetail;