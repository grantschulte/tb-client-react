import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as itemActions from '../actions/itemList.actions';
import ItemList from '../components/ItemList/ItemList';

const mapState = state => ({
  itemList: state.itemList
});

const mapDispatch = {
  ...itemActions
};

export default withRouter(connect(
  mapState,
  mapDispatch
)(ItemList));