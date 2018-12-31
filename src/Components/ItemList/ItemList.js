import React, { Component } from 'react';
import PageBody from '../PageBody/PageBody';

import ItemListCard from '../ItemListCard/ItemListCard';
import styles from './ItemList.module.css';

class ItemList extends Component {
  constructor () {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.checkOrFetch('itemList');
  }

  handleClick (url) {
    this.props.history.push(url);
  }

  render () {
    const { itemList, match } = this.props;

    const list = itemList.data
      ? itemList.data.map(item => {
          const detailUrl = `${match.path}/${item.id}`;
          return (
            <ItemListCard
              item={item}
              detailUrl={detailUrl}
              handleClick={this.handleClick}
              key={`item-${item.id}`}
            />
          );
        })
      : <div>Loading...</div>;

    return (
      <PageBody>
        <div className={styles.cardsWrapper}>
          { list }
        </div>
      </PageBody>
    );
  }
}

export default ItemList;