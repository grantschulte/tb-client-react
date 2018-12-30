import React from 'react';
import { Link } from 'react-router-dom';
import PageBody from '../PageBody/PageBody';

function ItemList (props) {
  const items = [1, 2, 3].map((item, i) => {
    return (
      <li key={`item-${i}`}>
        <Link to={`${props.match.path}/${item}`}>Item { item }</Link>
      </li>
    )
  });

  return (
    <PageBody>
      <ul>
        { items }
      </ul>
    </PageBody>
  )
}

export default ItemList;