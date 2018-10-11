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
    let users = this.props.users;
    let comments = this.props.comments.map ( (comment, idx) => {
      let user = users[comment.author_id];
      return (
        <CommentItem
          key={idx}
          user={user}
          comment={comment}
          deleteComment={this.props.deleteComment}
          closeModal={this.props.closeModal}
          currentUserId={this.props.currentUserId}
          />
      )
    })

    let form;
    let button;
    if (this.props.currentUserId) {
      form = (<form className="comment-box">
        <textarea
          placeholder="Share your thoughts"
          onChange={this.update()}

          value={this.state.body}
          />
        <input type="submit" style={{"display": "none"}}/>
      </form>);
      button = <img className="bubble-button" src={window.comment} onClick={this.handleSubmit}/>

    }
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
        {form}
        {button}
        <ul className="comment-list">
          {comments}
        </ul>
      </section>
    )
  }
}
