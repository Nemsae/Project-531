import React, { Component } from 'react';
import { connect } from 'react-redux';

import { upload, fetchImages } from '../actions/ImageActions';
import FileUpload from './FileUpload';
import ImagesDiv from './ImagesDiv';

@connect((state) => ({
  images: state.images
}), (dispatch) => ({
  upload(file) {
    dispatch(upload(file));
  },
  fetchImages() {
    dispatch(fetchImages());
  }
}))
export default class Layout extends Component {
  componentWillMount () {
    this.props.fetchImages();
  }

  render() {
    let { images } = this.props;
    return (
      <div className='container'>
        <h1 className='text-center'>s3 Image Uploading</h1>

        <FileUpload submitFile={this.props.upload}/>
        <ImagesDiv />
        {/* <ImagesDiv images={this.props.images}/> */}
      </div>
    );
  }
}
