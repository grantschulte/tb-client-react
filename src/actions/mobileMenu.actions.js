import * as types from '../constants/mobileMenu.types';

export function openMobileMenu () {
  return {
    type: types.OPEN_MOBILE_MENU
  };
}

export function closeMobileMenu () {
  return {
    type: types.CLOSE_MOBILE_MENU
  };
}