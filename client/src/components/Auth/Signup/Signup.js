import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { signup } from 'actions/auth';

class Signup extends Component {
  onSubmit = formProps => {
    this.props.signup(formProps, () => {
      this.props.history.push('/feature');
    });
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <div className="row">
        <form className="col s12" onSubmit={handleSubmit(this.onSubmit)}>
          <div className="row">
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="email"
                  type="email"
                  component="input"
                  placeholder="Email"
                />
              </div>
            </div>
            <div className="row">
              <div className="input-field col s12">
                <Field
                  name="password"
                  type="password"
                  component="input"
                  placeholder="Password"
                />
              </div>
            </div>
            <div className="row">
              <div className="col s12 red-text text-lighten-2">{this.props.errorMessage}</div>
            </div>
          </div>
          <button className="btn waves-effect waves-light" type="submit">Sign Up
            <i className="material-icons right">send</i>
          </button>
        </form>
      </div>
    );
  }
}

export default compose (
  connect(
    (state) => {
      return {
        errorMessage: state.auth.errorMessage
      }
    },
    {
      signup
    }
  ),
  reduxForm({ form: 'signup' })
)(Signup);