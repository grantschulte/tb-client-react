import * as types from '../constants/contactForm.types';

const initState = {
  submitting: false,
  error: undefined,
  status: undefined,
  data: undefined
};

function contactForm (state = initState, action) {
  switch (action.type) {
    case types.CONTACT_FORM_REQUEST:
      return Object.assign({}, state, {
        submitting: true
      });

    case types.CONTACT_FORM_REQUEST_SUCCESS:
      return Object.assign({}, state, {
        submitting: false,
        error: undefined,
        status: 'success',
        data: action.response.data
      });

    case types.CONTACT_FORM_REQUEST_FAILURE:
      return Object.assign({}, state, {
        submitting: false,
        status: 'error',
        error: action.error.message
      });

    default:
      return state;
  }
}

export default contactForm;