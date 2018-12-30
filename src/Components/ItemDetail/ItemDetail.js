import React from 'react';

function ItemDetail (props) {
  return (
    <h1>Item {props.match.params.id}</h1>
  )
}

export default ItemDetail;