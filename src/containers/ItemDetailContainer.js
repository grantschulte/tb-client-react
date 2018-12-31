import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ItemDetail from '../components/ItemDetail/ItemDetail';

const mapStateToProps = state => ({
  itemsList: state.itemsList
});

export default withRouter(connect(
  mapStateToProps
)(ItemDetail));