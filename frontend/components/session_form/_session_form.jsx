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
    this.guestSignIn = this.guestSignIn.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  guestSignIn(e) {
    e.preventDefault();
    const user = { username: 'Guest User', password: 'guestuser'}
    this.props.processForm(user);
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
      <div className='session-forms'>
        <Link to='/'><img className='nav-logo' src={window.logoURL}/></Link>
        {errors}
        <h3>Join 42px</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>Username<br/>
                <input type="text" onChange={this.update('username')} value={this.state.username} />
              </label>
            </li>

            <li>
              <label>Password<br/>
                <input type="password" onChange={this.update('password')} value={this.state.password} />
              </label>
            </li>

            <li>
              <input type="submit" value='Log In' />
            </li>
            <li>
              <br />
              <button className='color-buttons' onClick={this.guestSignIn}> Guest </button>
            </li>
          </ul>

        </form>
        <p>
          Don't have an account? <Link to={`/signup`}>Sign Up</Link>
        </p>

      </div>
    );
  }
}

export default withRouter(SessionForm);
