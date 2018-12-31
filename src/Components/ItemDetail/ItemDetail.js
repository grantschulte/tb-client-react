import React, { Component } from 'react';

class ItemDetail extends Component {
  componentDidMount () {
    this.props.checkOrFetch('itemList');
  }

  render () {
    const { item } = this.props;

    return (
      <div>
        {item &&
          <div>
            <h1>{ item.common_name }</h1>
            <p style={{ fontStyle: 'italic', marginTop: 0 }}>{ item.long_name }</p>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <img style={{ width: '400px' }} src={ item.image } alt={ item.common_name } />
              <p>{ item.long_description }</p>
            </div>
          </div>
        }

        {!item &&
          <div>Loading</div>
        }
      </div>
    );
  }
}

export default ItemDetail;