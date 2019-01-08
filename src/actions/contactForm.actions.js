import * as types from '../constants/contactForm.types';
import axios from 'axios';
import { delay } from '../utils/request.utils';

export function contactFormRequest () {
  return {
    type: types.CONTACT_FORM_REQUEST
  };
}

export function contactFormRequestSuccess (response) {
  return {
    type: types.CONTACT_FORM_REQUEST_SUCCESS,
    response
  };
}

export function contactFormRequestFailure (error) {
  return {
    type: types.CONTACT_FORM_REQUEST_FAILURE,
    error
  };
}

export function makeContactFormRequest () {
  return dispatch => {
    dispatch(contactFormRequest());

    delay(() => {
      axios
        .get(`${process.env.PUBLIC_URL}/json/success.json`)
        .then(data => dispatch(contactFormRequestSuccess(data)))
        .catch(error => dispatch(contactFormRequestFailure(error)));
    }, 2000);
  };
}