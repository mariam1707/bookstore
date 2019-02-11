import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setFormError } from 'actions/forms';
import Form from 'components/Form';
import withName from 'hocs/withName';

const mapStateToProps = (state, ownProps) => ({
  errors: state.form[ownProps.form],
});
const mapDispatchToProps = {
  setFormError,
};

function provideErrorsToForm(nextProps, prevState) {
  const obj = {};
  Object.keys(nextProps.errors.errors).forEach(key => {
    obj[key] = {
      error: nextProps.errors.errors[key],
      value: prevState[key].value,
    };
  });
  return obj;
}

export default withName('signUp')(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(
    class FormContainer extends Component {
      static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.errors && Object.keys(nextProps.errors).length) {
          return provideErrorsToForm(nextProps, prevState);
        }
        return null;
      }

      state = {
        email: {
          value: '',
          error: null,
        },
        password: {
          value: '',
          error: null,
        },
      };

      handleSubmit = () => {
        this.props.setFormError({
          form: this.props.form,
          error: {
            message: 'message',
            errors: {
              email: 'NOT VALID EMAIL',
              password: 'NOT VALID PASS',
            },
          },
        });
      };

      render() {
        const { email, password } = this.state;

        return <Form email={email} password={password} handleSubmit={this.handleSubmit} />;
      }
    }
  )
);
