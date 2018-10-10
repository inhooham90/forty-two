import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="show-author">
        <img src={this.props.user.profile_url} className="comment-pic"/>
        <ul style={{"paddingLeft":"7px"}}>
          <li className="comment-detail">
            <Link
              onClick={this.props.closeModal}
              to={`/profile/${this.props.comment.author_id}`}>
              {this.props.user.name}
            </Link>
            {this.props.comment.body}
          </li>
          <li className='show-uploaded'>
            {this.props.comment.time_posted}
            <button
              onClick={() => this.props.deleteComment(this.props.comment)}
              style={{"paddingLeft":"5px"}}>
              Delete
            </button>
          </li>
        </ul>
      </li>
    );
  }
}
