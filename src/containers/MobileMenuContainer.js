import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as mobileMenuActions from '../actions/mobileMenu.actions';
import MobileMenu from '../components/MobileMenu/MobileMenu';

const mapState = state => ({
  mobileMenu: state.mobileMenu
});

const mapDispatch = {
  ...mobileMenuActions
};

export default withRouter(connect(
  mapState,
  mapDispatch
)(MobileMenu));