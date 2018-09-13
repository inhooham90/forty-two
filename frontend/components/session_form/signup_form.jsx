import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      name: "",
      email: "",
      profile_url: window.defaultProfileURL
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.processForm(this.state).then(() => this.props.history.push('/'));
  }

  componentWillUnmount() {
        this.props.clearErrors();
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
            <h3>Join 42px</h3>
            <ul>
              <li>
                <label>Name<br/>
                <input className='session-input' type="name" onChange={this.update('name')} value={this.state.name} />
              </label>
            </li>

            <li>
              <label>Email<br/>
              <input className='session-input' type="email" onChange={this.update('email')} value={this.state.email} />
            </label>
          </li>

          <li>
            <label>Username<br/>
            <input className='session-input' type="text" onChange={this.update('username')} value={this.state.username} />
          </label>
        </li>

        <li>
          <label>Password<br/>
          <input className='session-input' type="password" onChange={this.update('password')} value={this.state.password} />
        </label>
      </li>  {errors}<br/>

      <li>

        <br/>
        <input className='session-button' type="submit" value='Sign Up' />
      </li>
    </ul>
    <p>
      Already have an account? <Link className='blank-buttonb' to={`/login`}>Log In</Link>
  </p>
</form>
        </section>

      </div>
    );
  }
}

export default withRouter(SessionForm);
