import React, { Fragment } from 'react';
import { Header } from 'semantic-ui-react';
import Page from '../Page/Page';
import ContactForm from '../ContactForm/ContactForm';
import withFormState from '../../hocs/form';
const Form = withFormState(ContactForm);

function ContactPage () {
  const onSubmit = (state) => {
    // Dispatch side effect form submission
    // props.submitContactForm();
    
    console.log('Form State', state);

    return { status: 200 };
  };

  const content = (
    <Fragment>
      <Header as='h1'>Contact Us</Header>
      <Form onSubmit={onSubmit} />
    </Fragment>
  );

  return <Page content={content} />;
}

export default ContactPage;