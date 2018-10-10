import React from 'react';
import CommentItem from './comment_item'

export default class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      body: "",
      photo_id: this.props.photo.id
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.update=this.update.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.createComment(this.state);
    this.setState({body: ""})
  }
  // handleDelete(e) {
  //   e.preventDefault();
  //   this.props.deleteComment(this.props.comment.id);
  // }

  update() {
    return (e) => {
      this.setState({body: e.currentTarget.value});
    };
  }
  render() {

    let comments = this.props.comments.map ( (comment, idx) => {
      let user = this.props.users[comment.author_id];
      return (
        <CommentItem
          key={idx}
          user={user}
          comment={comment}
          deleteComment={this.props.deleteComment}
          />
      )
    })
    // const comments = this.props.photo.comments.map((comment, idx) => {
    //   return (
    //     <li>
    //       {comment.body}
    //       {comment.author_id}
    //     </li>
    //   );
    // });

    return (
      <section className="comments">
        <form className="comment-box">
          <textarea
            placeholder="Share your thoughts"
            onChange={this.update()}
            className="comment-box"
            value={this.state.body}
            />
          <input type="submit" style={{"display": "none" }}/>
        </form>
        <img src={window.comment} onClick={this.handleSubmit}/>
        <ul>
          {comments}
        </ul>
      </section>
    )
  }
}
