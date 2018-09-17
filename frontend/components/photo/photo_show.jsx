import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { receivePhoto } from '../../actions/photo_actions';

export default class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: this.props.photo.title,
      description: this.props.photo.description,
      artist_id: this.props.photo.artist_id,
      img_url: this.props.photo.img_url,
      edit: false
    };
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.update=this.update.bind(this);
    this.toggleEdit= this.toggleEdit.bind(this);
  }

  toggleEdit(){
    if (this.state.edit === false ) {
      this.setState({edit: true})
    } else {
      this.setState({edit: false})
    }
  }
  // componentDidMount() {
  //   this.props.fetchPhoto(this.props.photo.id)
  // }

  handleSubmitSuccess(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.toggleEdit();
  }

  handleSubmitFail(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  render() {
    let errors;
    if (this.props.errors) {
      errors = (
        <ul className='error-lists'>
          {this.props.errors.map( error => {
            return <li>{error}</li>;
          })}
        </ul>
      );
    }

    let handleSubmit;
    if (this.state.title.length === 0 || this.state.description.length === 0 ) {
      handleSubmit = this.handleSubmitFail;
    } else {
      handleSubmit = this.handleSubmitSuccess;
    }
    let editButton;
    if (this.props.currentUserId === this.props.photo.artist_id) {
      editButton = <button onClick={this.toggleEdit} className='upload-form-button'>Edit</button>
    }

    let content;
    if (this.state.edit === false) {
      content = (
      <div className='dropzone-form'>
          <div className='preview'>
            <img src={`${this.props.photo.img_url}`} />
          </div>
          <div className='upload-form'>
            <ul className='upload-form-list'>
              <li>
                {editButton}
              </li>
              <li>
                <label><p>Title</p>
                  {this.props.photo.title}
                </label>
              </li>
              <li>
                <label><p>Description</p>
                  {this.props.photo.description}
                </label>
              </li>
            </ul>
          </div>
      </div>
      )
    } else {
      content = (
      <form className='dropzone-form'>
          <div className='preview'>
            <img src={this.state.img_url} />
          </div>
          <div className='upload-form'>
            <ul className='upload-form-list'>
              <li>
                <button className='upload-form-button' onClick={handleSubmit}>Submit</button>
              </li>
              <li>
                <label><p>Title</p>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.update('title')} />
                </label>
              </li>
              <li>
                <label><p>Description</p>
                  <textarea
                    value={this.state.description}
                    onChange={this.update('description')} />
                </label>
              </li>
              <li>
                <button onClick={this.toggleEdit} className='upload-form-button' style={{"backgroundColor": "#ef5656"}}>Cancel</button>
              </li>
              <li>
                {errors}
              </li>
            </ul>
          </div>
      </form>
      )
    }

    return (
        content
    );
  }
}
