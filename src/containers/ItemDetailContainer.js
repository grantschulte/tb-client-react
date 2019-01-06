import { flowRight } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as itemActions from '../actions/itemList.actions';
import ItemDetailPage from '../components/ItemDetailPage/ItemDetailPage';

const mapState = (state, ownProps) => {
  const allItems = state.itemList.data;
  const item = allItems
    ? allItems.find(i => i.id === parseInt(ownProps.match.params.id, 10))
    : undefined;
  return { item };
};

const mapDispatch = {
  ...itemActions
};

const wrappers = [
  withRouter,
  connect(mapState, mapDispatch)
];
  
export default flowRight(wrappers)(ItemDetailPage);