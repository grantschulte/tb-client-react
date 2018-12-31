import { combineReducers } from 'redux';

import itemList from './itemList.reducer';

const rootReducer = combineReducers({
  itemList
});

export default rootReducer;