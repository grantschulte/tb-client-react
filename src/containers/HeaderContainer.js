import { flowRight } from 'lodash';
import { withRouter } from 'react-router-dom';
import { connectMobileMenu } from './MobileMenuContainer';
import Header from '../components/Header/Header';

const wrappers = [
  withRouter,
  connectMobileMenu
];

export default flowRight(wrappers)(Header);