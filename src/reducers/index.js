import { combineReducers } from 'redux';

import itemList from './itemList.reducer';
import mobileMenu from './mobileMenu.reducer';

const rootReducer = combineReducers({
  itemList,
  mobileMenu
});

export default rootReducer;