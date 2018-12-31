import React, { Component } from 'react';

import ContentContainer from '../ContentContainer/ContentContainer';
import ItemListCard from '../ItemListCard/ItemListCard';
import { Loader } from 'semantic-ui-react';
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
      : <Loader size='huge' active />;

    return (
      <ContentContainer className='mv2'>
        <div className='flex flex-column'>
          <h1>Items</h1>
          { list }
        </div>
      </ContentContainer>
    );
  }
}

export default ItemList;