import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE
} from '../constants/itemList.types';

const initState = {
  loading: false,
  status: undefined,
  error: undefined,
  data: undefined
};

function itemList (state = initState, action) {
  switch (action.type) {
    case FETCH_ITEMS:
      return Object.assign({}, state, {
        loading: true
      });

    case FETCH_ITEMS_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        status: 'success',
        error: undefined,
        data: action.response.data
      });

    case FETCH_ITEMS_FAILURE:
      return Object.assign({}, state, {
        loading: false,
        status: 'error',
        error: action.error.message,
        data: action.response.data
      });

    default:
      return state;
  }
}

export default itemList;