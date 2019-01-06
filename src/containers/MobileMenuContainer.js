import { flowRight } from 'lodash';
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

export const connectMobileMenu = connect(mapState, mapDispatch);

const wrappers = [
  withRouter,
  connectMobileMenu
];

export default flowRight(wrappers)(MobileMenu);