import React from 'react';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import { connect } from 'react-redux';
import { receivePhoto } from '../../actions/photo_actions';
import cloudinary from 'cloudinary';



class PhotoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      artist_id: `${this.props.currentUser.id}`,
      img_url: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createBleat(this.state);
    this.setState({ body: ''});
  }

  handleChange(e) {
    this.setState({
      title: e.currentTarget.value,
      description: e.currentTarget.value,
      img_url: ''
    });
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <Dropzone
          multiple={false}
          accept="image/*"
          onDrop={this.onImageDrop.bind(this)} className='photo-dropzone'>
          <p>Drop an image or click to select a file to upload.</p>
        </Dropzone>

        <input type="text" value={this.state.body} onChange={this.handleChange}/>
        <button>Bleat it!</button>
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  // debugger
  return {
    createBleat: bleat => {
      debugger
      dispatch(receiveBleat(bleat))
    }
  };
};

export default connect(null, mapDispatchToProps)(BleatForm);
