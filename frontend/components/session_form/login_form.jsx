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
    if (this.props.errors) {
      errors = (
        <ul>
          {this.props.errors.map( error => {
            return <li>{error}</li>;
          })}
        </ul>
      );
    }

    return (
      <div>
        <Link to='/'><img className='nav-logo' src={window.logoURL2}/></Link>
        <section className='big-session'>
            <form className='session-forms' onSubmit={this.handleSubmit}>
              <h3>Log In to 42px</h3>
              <ul>
                <li>
                  <label>Username<br/>
                  <input className='session-input' type="text" onChange={this.update('username')} value={this.state.username} />
                </label>
                </li>

                <li>
                  <label>Password<br/>
                  <input className='session-input' type="password" onChange={this.update('password')} value={this.state.password} />
                  </label>
                </li>

                <li>
                  <input className='session-button' type="submit" value='Log In' />
                  {errors}
                </li>
                <li>
                  <br />
                  <button className='session-button2' onClick={this.guestSignIn}> Continue as a Guest </button>
                </li>
              </ul>

              <p>
                Don't have an account? <Link className='blank-buttonb' to={`/signup`}>Sign Up</Link>
              </p>
            </form>
        </section>

      </div>
    );
  }
}

export default withRouter(SessionForm);
