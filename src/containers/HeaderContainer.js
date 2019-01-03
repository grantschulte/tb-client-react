import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as mobileMenuActions from '../actions/mobileMenu.actions';
import Header from '../components/Header/Header';

const mapState = state => ({
  mobileMenu: state.mobileMenu
});

const mapDispatch = {
  ...mobileMenuActions
};

export default withRouter(connect(
  mapState,
  mapDispatch
)(Header));