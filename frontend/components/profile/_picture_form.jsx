import React from 'react';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import request from 'superagent';

const CLOUDINARY_UPLOAD_PRESET = 'jrlihltj';
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/da345yxkr/upload';

export default class PictureForm extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        user_id: this.props.currentUserId,
        photo_url: ''
      }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.cancel = this.cancel.bind(this);
  };

  handleSubmit(e) {
    e.preventDefault();
    this.cancel();
    this.props.action(this.state);
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                        .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                        .field('file', file);

    upload.end((err, response) => {


      if (response.body.secure_url !== '') {
        this.setState({
          photo_url: response.body.secure_url
        });
      }
    });
  }

  onImageDrop(files) {
    this.handleImageUpload(files[0]);
  }

  cancel(e) {
    this.setState({photo_url:""});
    this.props.cancel();
  }

  render() {
    let buttonText = this.props.type === "profile" ?
      "Profile Picture" : "Cover Picture";

    let content;
    if (!this.state.photo_url) {
      content =
      <section>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)}
          style={{"border":"none", "width":"100%", "height":"100%"}}>
          <button className='upload-button2'>Create {buttonText}</button>
        </Dropzone>
        <button
          onClick={this.props.cancel}>Cancel</button>
      </section>
    } else {
      content =
      <section>
        <form className="profile-upload-form">
          <div className="profile-img-container">
            <img src={this.state.photo_url} className="profile-original"/>
          </div>
          <p>
            Change {buttonText}?
          </p>
          <input type="submit" value="Submit" onClick={this.handleSubmit}/>
        </form>
        <button onClick={this.cancel}>Cancel</button>
      </section>
    };

    return content;
  }
}
