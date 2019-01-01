import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as itemActions from '../actions/itemList.actions';
import ItemDetailPage from '../components/ItemDetailPage/ItemDetailPage';

const mapStateToProps = (state, ownProps) => {
  const allItems = state.itemList.data;
  const item = allItems
    ? allItems.find(i => i.id === parseInt(ownProps.match.params.id, 10))
    : undefined;
  return { item };
};

const mapDispatchToProps = {
  ...itemActions
};
  
export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemDetailPage));