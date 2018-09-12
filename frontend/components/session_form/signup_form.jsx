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

    return (
      <div className='session-forms'>
        <Link to='/'><img className='nav-logo' src={window.logoURL}/></Link>
        {errors}
        <h3>Join 42px</h3>
        <form onSubmit={this.handleSubmit}>
          <ul>
            <li>
              <label>Name<br/>
                <input type="name" onChange={this.update('name')} value={this.state.name} />
              </label>
            </li>

            <li>
              <label>Email<br/>
                <input type="email" onChange={this.update('email')} value={this.state.email} />
              </label>
            </li>

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
              <br/>
              <input type="submit" value='Sign Up' />
            </li>
          </ul>
        </form>
        <p>
          Already have an account? <Link to={`/login`}>Log In</Link>
        </p>

      </div>
    );
  }
}

export default withRouter(SessionForm);
