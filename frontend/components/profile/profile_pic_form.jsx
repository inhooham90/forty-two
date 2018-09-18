import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { receivePhoto } from '../../actions/photo_actions';


const CLOUDINARY_UPLOAD_PRESET = 'jrlihltj';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/da345yxkr/upload';


export default class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: {},
      email: {},
      name: {},
      profile_url: {},
      password_digest:{},
      session_token:{},
      

    };
    this.handleSubmitSuccess = this.handleSubmitSuccess.bind(this);
    this.handleSubmitFail = this.handleSubmitFail.bind(this);
    this.update=this.update.bind(this);
  }

  handleSubmitSuccess(e) {
    e.preventDefault();
    this.props.action(this.state);
    this.props.closeModal();
  }

  handleSubmitFail(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {
      if (err) {
        console.error(err);
      }

      if (response.body.secure_url !== '') {
        this.setState({
          profile_url: response.body.secure_url
        });
      }
    });
  }

  update(field) {
    return (e) => {
      this.setState({[field]: e.currentTarget.value});
    };
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
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

    let content;
    if (!this.state.profile_url) {
      content = (
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          className='dropzone'>
          <p>
          <button className='upload-button2'>Upload</button>
          Or drag & drop photos anywhere on this page</p>

      </Dropzone>
      )
    } else {
      content = (
      <form className='dropzone-form'>
          <div className='preview'>
            <img src={this.state.profile_url} />
          </div>
          <div className='upload-form'>
            <ul className='upload-form-list'>
              <li>
                <button className='upload-form-button' onClick={handleSubmit}>Submit</button>
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
