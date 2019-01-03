import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import { Header, Loader } from 'semantic-ui-react';
import Page from '../Page/Page';

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

    const cards = itemList.data
      ? itemList.data.map(item => {
          const detailUrl = `${match.path}/${item.id}`;
          return (
            <Card
              key={`item-${item.id}`}
              onClick={() => this.handleClick(detailUrl)}
              fluid
            >
              <Card.Content>
                <Card.Header>{item.common_name}</Card.Header>
                <Card.Meta>{item.long_name}</Card.Meta>
                <Card.Description>{item.short_description}</Card.Description>
              </Card.Content>
            </Card>
          );
        })
      : <Loader size='huge' active />;

    const content = (
      <div className='flex flex-column'>
        <Header as='h1'>Items</Header>
        <div>{ cards }</div>
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