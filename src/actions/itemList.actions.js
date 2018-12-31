import * as types from '../constants/itemList.types';
import axios from 'axios';

export function requestItems (data) {
  return {
    type: types.FETCH_ITEMS
  };
}

export function requestItemsFailure (error) {
  return {
    type: types.FETCH_ITEMS_FAILURE,
    status: 'error',
    error
  };
}

export function requestItemsSuccess (response) {
  return {
    type: types.FETCH_ITEMS_SUCCESS,
    status: 'success',
    response
  };
}

export function fetchItems () {
  return dispatch => {
    dispatch(requestItems());

    axios
      .get(`${process.env.PUBLIC_URL}/json/fixture.json`)
      .then(data => dispatch(requestItemsSuccess(data)))
      .catch(error => dispatch(requestItemsFailure(error)));
  };
}

export function shouldMakeRequest(state, storeKey) {
  const { data, loading } = state[storeKey];

  if (!data) {
    return true;
  } else if (loading) {
    return false;
  } else {
    return false;
  }
}

export function checkOrFetch (storeKey) {
  return (dispatch, getState) => {
    if (shouldMakeRequest(getState(), storeKey)) {
      dispatch(fetchItems());
    } else {
      return Promise.resolve();
    }
  };
}