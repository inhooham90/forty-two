import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }


  update(field) {
    return (e) => {
      e.preventDefault();
      this.setState({ [field]: e.target.value });
    };
  }

  render() {
    let errors;
    if (this.props.errors.length) {
      errors = (
        <ul>
          {this.props.errors.map( error => {
            return <li>{error}</li>;
          })}
        </ul>
      );
    }

    const altType = this.props.formType === "signup" ? "login" : "signup";

    return (
      <div className='sessionForms'>
        {errors}
        <h3>Join 42px</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Username
            <input type="text" onChange={this.update('username')} value={this.state.username} />
          </label>

          <label>Password
            <input type="password" onChange={this.update('password')} value={this.state.password} />
          </label>

          <input type="submit" value='Log In' />
        </form>

        <p>
          Don't have an account? <Link to={`/signup`}>Sign Up</Link>
        </p>
      </div>
    );
  }
}

export default withRouter(SessionForm);
