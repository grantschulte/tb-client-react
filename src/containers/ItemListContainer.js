import { flowRight } from 'lodash';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as itemActions from '../actions/itemList.actions';
import ItemListPage from '../components/ItemListPage/ItemListPage';

const mapState = state => ({
  itemList: state.itemList
});

const mapDispatch = {
  ...itemActions
};

export const connectItemList = connect(mapState, mapDispatch);

const wrappers = [
  withRouter,
  connectItemList
];

export default flowRight(wrappers)(ItemListPage);