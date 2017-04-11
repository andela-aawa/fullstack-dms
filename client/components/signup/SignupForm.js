import React from 'react';
import validateInput from '../../../server/shared/validations/signup';
import TextField from 'material-ui/TextField';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      errors: {},
      isLoading: false,
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  isValid() {
    const { errors, isValid } = validateInput(this.state);

    if(!isValid) {
      this.setState({ errors })
    }
    return isValid;
  }

  onSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {}, isLoading: true })
      this.props.userSignupRequest(this.state).then(
        () => {},
        ({ data }) => this.setState({ errors: data, isLoading: false})
      );
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div className="row">
        <h4>Register</h4>
        <form className="col m12 l12" onSubmit={this.onSubmit}>
          <TextField
            hintText="UserName"
            errorText={errors.username}
            onChange={this.onChange}
            value={this.state.username}
            name="username"
            fullWidth
          /><br />
          <TextField
            hintText="First Name"
            errorText={errors.firstName}
            onChange={this.onChange}
            value={this.state.firstName}
            name="firstName"
            fullWidth
          /><br />
          <TextField
            hintText="Last Name"
            errorText={errors.lastName}
            onChange={this.onChange}
            value={this.state.lastName}
            name="lastName"
            fullWidth
          /><br />
          <TextField
            hintText="Email"
            errorText={errors.email}
            onChange={this.onChange}
            value={this.state.email}
            name="email"
            fullWidth
          /><br />
          <TextField
            hintText="Password"
            errorText={errors.password}
            onChange={this.onChange}
            value={this.state.password}
            name="password"
            fullWidth
          /><br />
          <TextField
            hintText="Password Confirmation"
            errorText={errors.passwordConfirmation}
            onChange={this.onChange}
            value={this.state.passwordConfirmation}
            name="passwordConfirmation"
            fullWidth
          /><br />
          <br />
          <br />
          <button disabled={this.state.isLoading} className="btn waves-effect waves-light blue" name="action" type="submit">Sign up
          </button>
        </form>
      </div>
    );
  }
}

SignupForm.propTypes = {
  userSignupRequest: React.PropTypes.func.isRequired,
};

export default SignupForm;
