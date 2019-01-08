import { combineReducers } from 'redux';

import contactForm from './contactForm.reducer';
import itemList from './itemList.reducer';
import mobileMenu from './mobileMenu.reducer';

const rootReducer = combineReducers({
  contactForm,
  itemList,
  mobileMenu
});

export default rootReducer;