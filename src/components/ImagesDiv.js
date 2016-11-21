import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect((state) => ({
  images: state.images,
  upload: state.upload
}), (dispatch) => ({
}))
export default class ImagesDiv extends Component {

  render () {
    let { images, upload } = this.props;
    console.log('images: ', images);
    console.log('upload: ', upload);
    let Images = [];
    if (upload.length) {
      images.push(upload);
    }
    if (images.length) {
      Images = images.map((img) => {
        return (
          <div className='imgCard' key={img.Key}>
            <img className='img' src={img.url} />
            <h4>Filename: {img.name}</h4>
            <h5>Created: {img.timestamp}</h5>
          </div>
        );
      });
    }
    return (
      <div className='imagesParent'>
        { Images }
      </div>
    );
  }
}
