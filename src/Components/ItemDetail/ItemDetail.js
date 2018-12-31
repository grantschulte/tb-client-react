import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react';

import ContentContainer from '../ContentContainer/ContentContainer';
import styles from './ItemDetail.module.css';


class ItemDetail extends Component {
  componentDidMount () {
    this.props.checkOrFetch('itemList');
  }

  render () {
    const { item } = this.props;

    return (
      <ContentContainer className='mv2'>
        {item &&
          <div>
            <h1 className='mb2'>{ item.common_name }</h1>
            <p className='mt0'>{ item.long_name }</p>
            <div className='flex flex-column'>
              <img
                className={styles.mainImg}
                src={ item.image }
                alt={ item.common_name } />
              <p>{ item.long_description }</p>
            </div>
          </div>
        }

        {!item && <Loader size='huge' active />}
      </ContentContainer>
    );
  }
}

export default ItemDetail;