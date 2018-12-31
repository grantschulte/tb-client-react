import { combineReducers } from 'redux';

import itemsList from './itemsList.reducer';

const rootReducer = combineReducers({
  itemsList
});

export default rootReducer;