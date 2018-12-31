import React, { Component } from 'react';
import PageBody from '../PageBody/PageBody';

import ItemListCard from '../ItemListCard/ItemListCard';
import styles from './ItemList.module.css';

class ItemList extends Component {
  componentDidMount() {
    this.props.fetchItems();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick (id, url) {
    this.props.setActiveItem(id);
    this.props.history.push(url);
  }

  render () {
    const { itemsList, match } = this.props;

    const listItems = itemsList.data.map((item, i) => {
      const detailUrl = `${match.path}/${item.id}`;
      return (
        <ItemListCard
          item={item}
          detailUrl={detailUrl}
          handleClick={this.handleClick}
          key={`item-${item.id}`}
        />
      );
    });

    return (
      <PageBody>
        <div className={styles.cardsWrapper}>
          { listItems }
        </div>
      </PageBody>
    );
  }
}

export default ItemList;