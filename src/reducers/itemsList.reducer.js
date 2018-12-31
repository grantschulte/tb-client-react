import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEMS_FAILURE,
  SET_ACTIVE_ITEM,
  TOGGLE_ITEM
} from '../constants/items.types';

const initState = {
  activeItem: undefined,
  loading: false,
  status: undefined,
  success: undefined,
  error: undefined,
  data: []
};

function itemsList (state = initState, action) {
  switch (action.type) {
    case SET_ACTIVE_ITEM:
      return {
        ...state,
        activeItem: state.data.find(i => i.id === action.id)
      };

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
        error: action.error.message
      });

    case TOGGLE_ITEM:
      return Object.assign({}, state, {
        data: items(state.items, action)
      });

    default:
      return state;
  }
}

function items (state = [], action) {
  switch (action) {
    case TOGGLE_ITEM:
      return state.map(item => {
        return item.id === action.id
          ? { ...item, visible: !item.visible }
          : item;
      });
      
    default:
      return state;
  }
}

export default itemsList;