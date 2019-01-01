import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Loader } from 'semantic-ui-react';
import Page from '../Page/Page';
import styles from './ItemDetailPage.module.css';
import { cssString } from '../../utils/css.utils';

class ItemDetail extends Component {
  componentDidMount () {
    this.props.checkOrFetch('itemList');
  }

  render () {
    const { item, history } = this.props;

    const content = (
      <React.Fragment>
        {item &&
          <div>
            <h1 className='mb2'>{ item.common_name }</h1>
            <p className='mt0'>{ item.long_name }</p>
            <div className='flex flex-column'>
              <img
                className={cssString(styles.mainImg, 'mb3')}
                src={ item.image }
                alt={ item.common_name } />
              <p>{ item.long_description }</p>
            </div>
          </div>
        }

        {!item && <Loader size='huge' active />}
      </React.Fragment>
    );

    const topBar = (
      <span onClick={() => history.goBack()}>
        <Icon link name='arrow left' />
        All Items
      </span>
    );

    return <Page
      topBar={topBar}
      content={content} />;
  }
}

ItemDetail.propTypes = {
  checkOrFetch: PropTypes.func.isRequired,
  item: PropTypes.object
};

export default ItemDetail;