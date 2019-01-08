import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import Page from '../Page/Page';
import ContactForm from '../ContactForm/ContactForm';
import withFormState from '../../hocs/form';
const Form = withFormState(ContactForm);

function ContactPage (props) {
  const onSubmit = (state) => {
    props.makeContactFormRequest(state);
  };

  const content = (
    <Fragment>
      <Header as='h1'>Contact Us</Header>
      <Form
        submitting={props.contactForm.submitting}
        onSubmit={onSubmit} />
    </Fragment>
  );

  return <Page content={content} />;
}

export default ContactPage;