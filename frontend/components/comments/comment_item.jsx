import React from 'react';
import { Link } from 'react-router-dom';

export default class CommentItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let removeButton;
    if (this.props.currentUserId === this.props.comment.author_id) {
      removeButton = (<button
        onClick={() => this.props.deleteComment(this.props.comment)}
        className="delete-comment">
        Delete
      </button>);
    };

    let imgSrc = this.props.user.profile_url;
    if (this.props.user.profile_picture) {
      imgSrc = this.props.user.profile_picture.photo_url;
    }
    return (
      <li className="show-author">
        <Link
          onClick={this.props.closeModal}
          to={`/profile/${this.props.comment.author_id}`}>
          <img src={imgSrc} className="comment-pic"/>
        </Link>
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
            {removeButton}
          </li>
        </ul>
      </li>
    );
  }
}
