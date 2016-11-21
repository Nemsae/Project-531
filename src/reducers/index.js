import { combineReducers } from 'redux';
import images from './images';
import upload from './upload';

export default combineReducers({
  images,
  upload
});
