import * as types from '../constants/mobileMenu.types';

const initState = {
  isOpen: false
};

function mobileMenu (state = initState, action) {
  switch (action.type) {
    case types.OPEN_MOBILE_MENU:
      return {
        ...state,
        isOpen: true
      };

    case types.CLOSE_MOBILE_MENU:
      return {
        ...state,
        isOpen: false
      };

    default:
      return state;
  }
}

export default mobileMenu;