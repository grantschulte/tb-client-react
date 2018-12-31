import * as types from '../constants/items.types';

export function fetchItems (data) {
  return {
    type: types.FETCH_ITEMS
  };
}

export function fetchItemsFailure (error) {
  return {
    type: types.FETCH_ITEMS_FAILURE,
    status: 'error',
    error
  };
}

export function fetchItemsSuccess (response) {
  return {
    type: types.FETCH_ITEMS_SUCCESS,
    status: 'success',
    response
  };
}

export function setActiveItem (id) {
  return {
    type: types.SET_ACTIVE_ITEM,
    id
  };
}

export function toggleItem (id) {
  return {
    type: types.TOGGLE_ITEM,
    id
  };
}