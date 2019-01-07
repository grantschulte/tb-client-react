import React from 'react';

function withFormState (WrappedComponent) {
  return class FormContainer extends React.Component {
    constructor () {
      super();
      this.state = {
        fields: {}
      };
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleSubmit (e) {
      this.setState({
        submitting: true
      });

      setTimeout(() => {
        const data = this.props.onSubmit(this.state);

        if (data.status === 200) {
          this.setState({
            submitting: false,
            fields: {}
          });
        }
      }, 2000);
      
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
}

export default withFormState;