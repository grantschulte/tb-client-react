import { connect } from 'react-redux';
import ContactPage from '../components/ContactPage/ContactPage';
import * as contactFormActions from '../actions/contactForm.actions';

const mapState = state => ({
  contactForm: state.contactForm
});

const mapDispatch = {
  ...contactFormActions
};

export default connect(mapState, mapDispatch)(ContactPage);