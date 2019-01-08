import React from 'react';
import PropTypes from 'prop-types';

function withFormState (WrappedComponent) {
  class FormContainer extends React.Component {
    constructor () {
      super();
      this.state = {
        fields: {}
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit (e) {
      console.log('Submitting...', this.state.fields);
      this.props.onSubmit(this.state.fields);
      e.preventDefault();
    }

    handleInputChange (e, data) {
      this.setState((prevState) => ({
        fields: {
          ...prevState.fields,
          [data.name]: data.value
        }
      }));
    }

    render () {
      const { onSubmit, ...otherProps } = this.props;

      return (
        <WrappedComponent
          onSubmit={this.handleSubmit}
          onChange={this.handleInputChange}
          formState={this.state}
          {...otherProps }
        />
      );
    }
  };

  FormContainer.propTypes = {
    WrappedComponent: PropTypes.element
  };

  return FormContainer;
}

export default withFormState;