import React from 'react';
import { Link, Route } from 'react-router-dom';

class FrontDisplay extends React.Component {
  constructor(props) {
    super(props);
  }
  //
  // handleClick(e) {
  //   e.preventDefault();
  //   this.props.logout();
  // }

  render() {
    const front = this.props.currentUser ? (
      <div>

        </div>)
      :
      (<div className='splash-image'>

      </div>)

      return (
        <div>
          {front}
        </div>
      )
  }
}

export default FrontDisplay;
