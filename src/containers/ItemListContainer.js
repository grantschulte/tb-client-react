import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import * as itemsActions from '../actions/items.actions';
import ItemList from '../components/ItemList/ItemList';

const mapStateToProps = state => ({
  itemsList: state.itemsList
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => {
    dispatch(itemsActions.fetchItems());

    axios
      .get(`${process.env.PUBLIC_URL}/json/fixture.json`)
      .then(data => dispatch(itemsActions.fetchItemsSuccess(data)))
      .catch(error => dispatch(itemsActions.fetchItemsFailure(error)));
  },

  setActiveItem: id => dispatch(itemsActions.setActiveItem(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList));