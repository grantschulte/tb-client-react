import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Loader } from 'semantic-ui-react';
import Page from '../Page/Page';
import ItemListCard from '../ItemListCard/ItemListCard';

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

    const content = (
      <div className='flex flex-column'>
        <h1>Items</h1>
        <div>{ list }</div>
      </div>
    );

    return <Page content={content} />;
  }
}

ItemList.propTypes = {
  checkOrFetch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  itemList: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default ItemList;