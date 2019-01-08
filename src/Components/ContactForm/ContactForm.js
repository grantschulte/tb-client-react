import React from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import topicOptions from './topic-options';

function ContactForm (props) {
  const { onChange, onSubmit, formState, submitting } = props;

  return (
    <Form onSubmit={onSubmit}>
      <div className='flex flex-column'>
        <div className='mb3'>
          <Form.Field
            id='first-name'
            name='firstName'
            control={Input}
            label='First name'
            placeholder='First Name'
            onChange={onChange}
            value={formState.fields['firstName'] || ''}
            fluid
          />
        </div>

        <div className='mb3'>
          <Form.Field
            id='last-name'
            name='lastName'
            control={Input}
            label='Last name'
            placeholder='Last Name'
            onChange={onChange}
            value={formState.fields['lastName'] || ''}
            fluid
          />
        </div>

        <div className='mb3'>
          <Form.Field
            id='email'
            name='email'
            type='email'
            control={Input}
            label='Email address'
            placeholder='Email address'
            onChange={onChange}
            value={formState.fields['email'] || ''}
            fluid
          />
        </div>

        <div className='mb3'>
          <Form.Select
            id='topic'
            name='topic'
            label='Choose A Topic'
            placeholder='Topic'
            onChange={onChange}
            options={topicOptions}
          />
        </div>

        <div className='mb3'>
          <Form.TextArea
            id='comments'
            name='comments'
            label='Comments'
            placeholder='Comments...'
            onChange={onChange}
            value={formState.fields['comments'] || ''}
          />
        </div>
      </div>

      <Form.Field
        id='form-button'
        control={Button}
        content='Submit'
        primary
        fluid
        size='large'
        loading={submitting}
      />
    </Form>
  );
}

export default ContactForm;